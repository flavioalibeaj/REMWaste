import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.wewantwaste.co.uk/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// TODO add snackbar for errors

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
