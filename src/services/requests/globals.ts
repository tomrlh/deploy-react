import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "utils/constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  //baseURL: "http://46f2d398bd21.ngrok.io",
  timeout: 100000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export const defaultHeaders = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export type LoginResponseType = {
  status: string;
  token: string;
  refreshToken: string;
  type: string;
  user: object | null;
  // message: string; // testar este
};

export type CustomResponseType = {
  status: string | number;
  data: any;
  error: boolean;
  // message: string; // testar este
};

export const formatAxiosResponse = (
  response: AxiosResponse<any>,
  error: boolean
): CustomResponseType => {
  console.log(response);

  return {
    data: response.data ? response.data : response.toString(),
    status: response.status,
    // status: response.statusText,
    error: error,
  };
};
