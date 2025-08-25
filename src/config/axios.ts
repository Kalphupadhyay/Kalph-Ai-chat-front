import axios from "axios";
import { apiConfig } from "../constants/api";

export const axiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
