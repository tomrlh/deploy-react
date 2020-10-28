import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { PontoEmbarque } from "services/types/PontoEmbarque";

export const get = async (): Promise<PontoEmbarque[]> => {
  let res: PontoEmbarque[] = await axios
    .get("ponto-embarque")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<PontoEmbarque> => {
  let res: PontoEmbarque = await axios
    .get(`ponto-embarque/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (
  pontoEmbarque: PontoEmbarque
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .post("ponto-embarque", pontoEmbarque)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  pontoEmbarque: PontoEmbarque
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`ponto-embarque/${id}`, pontoEmbarque)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const destroy = async (id: number): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`ponto-embarque/${id}`)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
