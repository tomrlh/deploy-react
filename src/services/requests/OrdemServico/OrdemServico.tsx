import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { OrdemServico, IOrdemServico } from "services/types/OrdemServico";

export const get = async (): Promise<OrdemServico[]> => {
  let res: OrdemServico[] = await axios
    .get("ordem-servico")
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const getByCliente = async (): Promise<OrdemServico[]> => {
  let res: OrdemServico[] = await axios
    .get(`cliente/ordem-servico`)
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const getByContrato = async (
  contratoId: string
): Promise<OrdemServico[]> => {
  let res: OrdemServico[] = await axios
    .get(`contrato/${contratoId}/ordem-servico`)
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const getBySupervisor = async (
  id: string | number
): Promise<OrdemServico[]> => {
  let res: OrdemServico[] = await axios
    .get(`ordem-servico-by-supervisor/${id}`)
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const post = async (
  ordemServico: IOrdemServico
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .post("ordem-servico", ordemServico)
    .then((response) => formatAxiosResponse(response, false))
    .catch(({ response }) => formatAxiosResponse(response.data.message, true));

  return res;
};

export const update = async (
  id: string,
  ordemServico: IOrdemServico
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`ordem-servico/${id}`, ordemServico)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const updateRemoveSupervisor = async (
  id: string,
  supervisorId: string
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`ordem-servico/${id}/remove/${supervisorId}`)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};
