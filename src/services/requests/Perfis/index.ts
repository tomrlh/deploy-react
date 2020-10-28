import { Perfil } from "services/types/Perfil";
import { axiosInstance as axios, formatAxiosResponse } from "../globals";

type Estado = {
  id: string;
  nome: string;
};

export const get = async (): Promise<Perfil[]> => {
  let res: Perfil[] = await axios
    .get("perfis")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Perfil> => {
  let res: Perfil = await axios
    .get(`perfis/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};
