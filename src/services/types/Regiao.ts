import { Usuario } from "./Usuario";

export interface Regiao extends IRegiao {
  id: number;
}

type Estado = {
  uf: string;
};

export type Cidade = {
  id: number;
  nome: string;
  estado: Estado;
};

export interface IRegiao {
  nome: string;
  cidades: Cidade[];
  slug: string;
  usuario: Usuario;
}

export enum RegiaoFieldsAPI {
  NOME = "nome",
  CIDADES = "cidades",
}

export enum RegiaoFieldsNames {
  NOME = "Nome",
  CIDADES = "Cidades",
}
