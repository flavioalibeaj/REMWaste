import { useCallback, useEffect, useMemo, useState } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { StepContent, Box } from "@mui/material";
import { createSteps } from "./createSteps";
import { blue } from "@mui/material/colors";

const SelectSkip = () => {
  const [users, setUsers] = useState<SkipType[]>([]);
  const [activeStep, setActiveStep] = useState(2);
  const [selectedSkip, setSelectedSkip] = useState<SkipType | undefined>(
    undefined
  );

  const selectSkip = useCallback((skip?: SkipType) => {
    setSelectedSkip(skip);
  }, []);

  const steps = useMemo(
    () => createSteps(users, selectedSkip, selectSkip),
    [users, selectedSkip]
  );

  useEffect(() => {
    getSkips()
      .then(({ data }) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <Box
      sx={{
        paddingInline: {
          xs: "2rem",
          sm: "4rem",
          xl: "8rem",
        },
        paddingBlock: {
          xs: "2rem",
          xl: "3rem",
        },
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={step.icon}
              sx={{
                color: index <= activeStep ? blue[800] : "unset",
                ":hover": {
                  cursor: index <= activeStep ? "pointer" : "default",
                },
              }}
              onClick={() => {
                if (index <= activeStep) {
                  setActiveStep(index);
                }
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent>{step.content}</StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SelectSkip;
