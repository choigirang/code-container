import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.35.234.0:8080/",
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use();
