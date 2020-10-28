import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { ResponsavelCliente } from "services/types/ResponsavelCliente";
import { Pagination } from "services/types/Adonis/Pagination";

export const get = async (): Promise<Pagination<ResponsavelCliente>> => {
  let res: Pagination<ResponsavelCliente> = await axios
    .get("responsavel-cliente")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<ResponsavelCliente> => {
  let res: ResponsavelCliente = await axios
    .get(`responsavel-cliente/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (
  respCliente: ResponsavelCliente
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .post("responsavel-cliente", respCliente)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  respCliente: ResponsavelCliente
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`responsavel-cliente/${id}`, respCliente)
    .then((response) => {
      console.log("RESPONSE", response);
      return formatAxiosResponse(response, false);
    })
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const destroy = async (id: number): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`responsavel-cliente/${id}`)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
