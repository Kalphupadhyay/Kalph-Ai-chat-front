import type { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";

export function get(api: string, config?: AxiosRequestConfig) {
  return axiosInstance.get(api, config);
}

export function post<T>(api: string, data?: T, config?: AxiosRequestConfig) {
  return axiosInstance.post(api, data, config);
}

export function uploadFile(
  api: string,
  file: File,
  config?: AxiosRequestConfig
) {
  const formData = new FormData();
  formData.append("file", file);
  return axiosInstance.post(api, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...config,
  });
}
