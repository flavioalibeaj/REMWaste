import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { SkipType } from "../../model/SkipType";

const SkipCard = ({ skip }: SkipCardProps) => {
  return (
    <Card>
      <CardMedia
        sx={{
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
      />
      <CardContent>
        <Typography variant="body1">{skip.size} Yard Skip</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {skip.hire_period_days} day hire period
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
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
