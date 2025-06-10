import { useCallback, useEffect, useMemo, useState } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { StepContent, Box, Typography, Paper, Button } from "@mui/material";
import { createSteps } from "./createSteps";
import { blue, grey } from "@mui/material/colors";
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
      component="main"
      sx={{
        flexGrow: 1,
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
      {selectedSkip && activeStep === 2 && (
        <Paper
          component="div"
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "auto",
            backgroundColor: grey[300],
            textAlign: "center",
            paddingInline: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "5rem",
            },
            paddingBlock: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: "1rem",
                sm: "2rem",
              },
              justifyContent: "center",
              alignItems: "center",
              mb: "2rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "600" }}
              color={blue["800"]}
            >
              £{selectedSkip.price_before_vat}
            </Typography>
            <Typography sx={{ color: "text.primary" }}>
              {selectedSkip.size} Yard Skip
            </Typography>
            <Typography sx={{ color: "text.primary" }}>
              {selectedSkip.hire_period_days} day hire period
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </Typography>

          <Box
            component="div"
            sx={{
              mt: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default SelectSkip;
