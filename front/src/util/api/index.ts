import axios from "axios";

export const api = axios.create({
  baseURL: "https://",
  timeout: 5000,
  headers: {},
});