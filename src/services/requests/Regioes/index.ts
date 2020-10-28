import { IRegiao, Regiao } from "services/types/Regiao";
import {
  axiosInstance as axios,
  formatAxiosResponse,
  CustomResponseType,
} from "../globals";

export const get = async (): Promise<Regiao[]> => {
  let res: Regiao[] = await axios
    .get("regioes")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Regiao> => {
  let res: Regiao = await axios
    .get(`regioes/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (regiao: IRegiao): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .post("regioes", regiao)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const postOnlyNome = async (
  nome: string
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .post("regioes-only-nome", nome)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const update = async (
  id: string,
  cidadesIds: { nome: string; cidadesIds: number[] }
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`regioes/${id}`, cidadesIds)
    .then((response) => response)
    .catch((error) => error.response);
  return res;
};

export const destroy = async (id: number): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`regioes/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const destroyCity = async (
  id: number,
  cidadeId: number
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`regioes/${id}/cidades/${cidadeId}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
