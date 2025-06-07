import type { SkipType } from "../model/SkipType";
import { getData } from "./http";

export const getSkips = () =>
  getData<SkipType>("api/skips/by-location", {
    postcode: "NR32",
    area: "Lowestoft",
  });
