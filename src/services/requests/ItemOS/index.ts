import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { ItemOS } from "services/types/ItemOS";
import { Pagination } from "services/types/Adonis/Pagination";

export const get = async (): Promise<Pagination<ItemOS>> => {
  let res: Pagination<ItemOS> = await axios
    .get("item-os")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<ItemOS> => {
  let res: ItemOS = await axios
    .get(`item-os/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const findByOS = async (id: string): Promise<ItemOS[]> => {
  let res: ItemOS[] = await axios
    .get(`item-os/ordem-servico/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const findByClassificador = async (
  id: string | number
): Promise<ItemOS[]> => {
  let res: ItemOS[] = await axios
    .get(`item-os-by-classificador/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (itemOS: ItemOS): Promise<CustomResponseType> => {
  console.log("ITEM OS", itemOS);
  let res: CustomResponseType = await axios
    .post("item-os", itemOS)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  itemOS: ItemOS
): Promise<CustomResponseType> => {
  console.log("WILL INPUT", itemOS.produtoNome);
  let res: CustomResponseType = await axios
    .put(`item-os/${id}`, itemOS)
    .then((response) => response)
    .catch((error) => error.response);
  return res;
};

export const removeClassificador = async (
  id: string
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`item-os/${id}/remove-classificador`)
    .then((response) => {
      console.log(response);
      return formatAxiosResponse(response, false);
    })
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const destroy = async (id: number): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`item-os/${id}`)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
