import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { SkipType } from "../../model/SkipType";
import { blue, orange } from "@mui/material/colors";
import WarningIcon from "@mui/icons-material/Warning";

const SkipCard = ({ skip }: SkipCardProps) => {
  return (
    <Card>
      <CardMedia
        sx={{
          position: "relative",
          height: 140,
          margin: {
            xs: 0,
            sm: 3,
          },
          borderRadius: 1,
          objectFit: "cover",
        }}
        image="/src/assets/image.png"
        title="green iguana"
      >
        <Chip
          label={skip.size + " Yards"}
          sx={{
            position: "absolute",
            right: "2%",
            top: "2%",
            background: blue[800],
          }}
        />
        {!skip.allowed_on_road && (
          <Chip
            label="Not Allowed On Road"
            icon={<WarningIcon />}
            sx={{
              position: "absolute",
              left: "2%",
              bottom: "2%",
              background: orange[900],
            }}
          />
        )}
      </CardMedia>
      <CardContent
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          {skip.size} Yard Skip
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {skip.hire_period_days} day hire period
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Transport Cost:{" "}
          {!skip.transport_cost ? "Free" : `£${skip.transport_cost}`}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "600" }} color={blue["800"]}>
          £{skip.price_before_vat}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
          margin: "0 1rem 1rem",
        }}
      >
        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
          Select This Skip
        </Button>
      </CardActions>
    </Card>
  );
};

export default SkipCard;

type SkipCardProps = {
  skip: SkipType;
};
