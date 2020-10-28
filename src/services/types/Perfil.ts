export interface Perfil extends IPerfil {
  id: number;
}

export interface IPerfil {
  nome: string;
  descricao: string;
  slug: string;
}

export enum PerfilFieldsAPI {
  NOME = "nome",
  DESCRICAO = "descricao",
  SLUG = "slug",
}

export enum PerfilFieldsNames {
  NOME = "Nome",
  DESCRICAO = "Descrição",
  SLUG = "Slug",
}
