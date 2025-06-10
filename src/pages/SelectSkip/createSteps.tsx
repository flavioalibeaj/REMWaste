import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { Box, Grid, Typography } from "@mui/material";
import SkipCard from "../../components/SkipCard/SkipCard";
import type { SkipType } from "../../model/SkipType";

export const createSteps = (
  users: SkipType[],
  selectedSkip: SkipType | undefined,
  selectSkip: (skip?: SkipType) => void
) => [
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
            xs: "1rem 0",
            sm: "2rem",
          },
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Choose Your Skip Size</Typography>
        <Typography variant="subtitle1">
          Select the skip size that best suits your needs
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {users.map((skip) => (
              <Grid
                key={`${skip.id}-grid`}
                size={{
                  xs: 12,
                  md: 6,
                  lg: 4,
                  xl: 3,
                }}
              >
                <SkipCard
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSkipSelected={selectSkip}
                />
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
