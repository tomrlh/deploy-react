import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
} from "../globals";
import { Usuario } from "services/types/Usuario";

export const get = async (): Promise<Usuario[]> => {
  let res: Usuario[] = await axios
    .get("usuarios")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const getSupervisores = async (): Promise<Usuario[]> => {
  let res: Usuario[] = await axios
    .get("usuarios-supervisores")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const getClassificadores = async (): Promise<Usuario[]> => {
  let res: Usuario[] = await axios
    .get("usuarios-classificadores")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Usuario> => {
  let res: Usuario = await axios
    .get(`usuarios/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (
  respCliente: Usuario
): Promise<CustomResponseType> => {
  console.log(respCliente);
  let res: CustomResponseType = await axios
    .post("usuarios", respCliente)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const postClientUser = async (
  email: string,
  password: string,
  perfisIds: Number[]
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    //.post("usuarios", { email, password, rolesIds: perfisIds } as IUsuario)
    .post("usuarios")
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  Usuario: Usuario
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`usuarios/${id}`, Usuario)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const destroy = async (id: string): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .delete(`usuarios/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
  return res;
};
