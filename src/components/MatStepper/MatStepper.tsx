import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { Button, StepContent, Typography } from "@mui/material";

const steps: {
  label: string;
  icon: React.JSX.Element;
  content: React.JSX.Element;
}[] = [
  {
    label: "Postcode",
    icon: <LocationOnOutlinedIcon />,
    content: <></>,
  },
  {
    label: "Waste Type",
    icon: <DeleteOutlinedIcon />,
    content: <></>,
  },
  {
    label: "Select Skip",
    icon: <LocalShippingOutlinedIcon />,
    content: <></>,
  },
  {
    label: "Permit Check",
    icon: <ShieldOutlinedIcon />,
    content: <></>,
  },
  {
    label: "Choose Date",
    icon: <CalendarTodayOutlinedIcon />,
    content: <></>,
  },
  {
    label: "Payment",
    icon: <PaymentOutlinedIcon />,
    content: <></>,
  },
];

export default function MatStepper() {
  const [activeStep, setActiveStep] = React.useState(2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon}>{step.label}</StepLabel>
            <StepContent>
              <Typography>{`step.description`}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}>
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
