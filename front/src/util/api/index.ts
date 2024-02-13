import axios from "axios";

export const api = axios.create({
  baseURL: "http://13.209.18.216:8080/",
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use();
