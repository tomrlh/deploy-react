import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";

type Estado = {
  id: string;
  nome: string;
};

export const get = async (): Promise<Estado[]> => {
  let res: Estado[] = await axios
    .get("estados")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Estado> => {
  let res: Estado = await axios
    .get(`estados/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
