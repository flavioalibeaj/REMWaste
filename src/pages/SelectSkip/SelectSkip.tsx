import { useCallback, useEffect, useMemo, useState } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { StepContent, Box } from "@mui/material";
import { createSteps } from "./createSteps";
import { blue } from "@mui/material/colors";
import { useSnackbar } from "notistack";

const SelectSkip = () => {
  const [users, setUsers] = useState<SkipType[]>([]);
  const [activeStep, setActiveStep] = useState(2);
  const [selectedSkip, setSelectedSkip] = useState<SkipType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const selectSkip = useCallback((skip?: SkipType) => {
    setSelectedSkip(skip);
  }, []);

  const steps = useMemo(
    () => createSteps(users, selectedSkip, selectSkip),
    [users, selectedSkip]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getSkips();
        setUsers(data);
      } catch (error) {
        setUsers([]);

        enqueueSnackbar("Failed to load data. Please try again later.", {
          variant: "error",
          autoHideDuration: 5000,
        });

        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (users.length === 0) {
    return <div>No data available.</div>;
  }

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
