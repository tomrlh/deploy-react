import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { Laudo } from "services/types/Laudo";

export const get = async (): Promise<Laudo[]> => {
  let res: Laudo[] = await axios
    .get("laudo")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Laudo> => {
  let res: Laudo = await axios
    .get(`laudo/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const findByItem = async (id: string): Promise<Laudo[]> => {
  let res: Laudo[] = await axios
    .get(`laudo/item-os/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (laudo: Laudo): Promise<CustomResponseType> => {
  console.log("laudo", laudo);
  let res: CustomResponseType = await axios
    .post("laudo", laudo)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  laudo: Laudo
): Promise<CustomResponseType> => {
  console.log("WILL INPUT LAUDO", laudo.id);
  let res: CustomResponseType = await axios
    .put(`laudo/${id}`, laudo)
    .then((response) => response)
    .catch((error) => error.response);
  return res;
};

export const destroy = async (id: string): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`laudo/${id}`)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
