import { Typography } from "@mui/material";
import type { SkipType } from "../../model/SkipType";

const SkipCard = ({ skip }: SkipCardProps) => {
  return <Typography variant="body1">{skip.id}</Typography>;
};

export default SkipCard;

type SkipCardProps = {
  skip: SkipType;
};
