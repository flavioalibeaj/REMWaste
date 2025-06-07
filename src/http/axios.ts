import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.wewantwaste.co.uk/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
