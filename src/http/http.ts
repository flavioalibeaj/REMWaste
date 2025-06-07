import type { AxiosResponse } from "axios";
import { api } from "./axios";

export const getData = <T>(
  url: string,
  params?: { [x: string]: string }
): Promise<AxiosResponse<T[]>> =>
  api.get(url, {
    params,
  });
