import { useEffect, useState, type JSX } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { StepContent, Typography, Box, Grid } from "@mui/material";
import SkipCard from "../../components/SkipCard/SkipCard";

const SelectSkip = () => {
  const [users, setUsers] = useState<SkipType[]>([]);
  const [activeStep, setActiveStep] = useState(2);

  const steps: {
    label: string;
    icon: JSX.Element;
    content?: JSX.Element;
  }[] = [
    {
      label: "Postcode",
      icon: <LocationOnOutlinedIcon />,
    },
    {
      label: "Waste Type",
      icon: <DeleteOutlinedIcon />,
    },
    {
      label: "Select Skip",
      icon: <LocalShippingOutlinedIcon />,
      content: (
        <Box
          sx={{
            padding: {
              xs: "1rem",
              sm: "2rem",
            },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
          <Typography variant="h4">Choose Your Skip Size</Typography>
          <Typography variant="subtitle1">
            Select the skip size that best suits your needs
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {users.map((skip) => (
                <Grid
                  key={`${skip.id}-grid`}
                  size={{
                    xs: 12,
                    md: 6,
                    xl: 4,
                  }}>
                  <SkipCard key={skip.id} skip={skip} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ),
    },
    {
      label: "Permit Check",
      icon: <ShieldOutlinedIcon />,
    },
    {
      label: "Choose Date",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      label: "Payment",
      icon: <PaymentOutlinedIcon />,
    },
  ];

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
      }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={step.icon}
              sx={{
                ":hover": {
                  cursor: index <= activeStep ? "pointer" : "default",
                },
              }}
              onClick={() => {
                if (index <= activeStep) {
                  setActiveStep(index);
                }
              }}>
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
