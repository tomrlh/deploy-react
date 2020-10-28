import { axiosInstance as axios, formatAxiosResponse } from "../globals";

type Cidade = {
  id: string;
  nome: string;
};

export const get = async (): Promise<Cidade[]> => {
  let res: Cidade[] = await axios
    .get("cidades")
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Cidade> => {
  let res: Cidade = await axios
    .get(`cidades/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const getByEstado = async (id: string): Promise<Cidade[]> => {
  let res: Cidade[] = await axios
    .get(`cidades/estado/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

//   table.integer('area_id').unsigned().nullable()
//   table.integer('estado_id').unsigned().notNullable()
//   table.string('nome')
//   table.string('codigo_ibge')
//   table.foreign('area_id').references('id').inTable('area')
//   table.foreign('estado_id').references('id').inTable('estado')
