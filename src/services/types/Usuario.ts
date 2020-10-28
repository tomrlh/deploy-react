import { Regiao } from "./Regiao";
import { Role } from "./Role";

export interface Usuario extends IUsuario {
  id: number;
}

// cidade ou estado
type Alocacao = {
  id: number;
  nome: string;
  estado: Estado;
};

type Cidade = {
  nome: string;
};

type Estado = {
  nome: string;
  uf: string;
};

export interface IUsuario {
  nome: string;
  password: string;
  username: string;
  cpf: string | null;
  rg: string | null;
  endereco: string | null;
  telefone: string | null;
  email: string | null;
  roles: Role[] | null;
  rolesIds: Number[] | null;
  alocacaoFuncionarioCampo: Alocacao[] | null;
  alocacaoFuncionarioCampoId: Number | null;
  alocacaoFuncionarioCampoIds: Number[] | null;
  alocacaoGerencia: Alocacao[] | null;
  alocacaoGerenciaId: Number | null;
  alocacaoGerenciaIds: Number[] | null;
  regiao: Regiao | null;
  regiaoId: Number | null;
}

export enum UsuarioFieldsAPI {
  NOME = "nome",
  PASSWORD = "password",
  USERNAME = "username",
  CPF = "cpf",
  RG = "rg",
  ENDERECO = "endereco",
  TELEFONE = "telefone",
  EMAIL = "email",
  PERFIS = "roles",
  PERFIS_ID = "rolesIds",
  ALOCACAO_CAMPO_ID = "alocacaoFuncionarioCampoId",
  ALOCACAO_GERENCIA_ID = "alocacaoGerenciaId",
  REGIAO = "regiao",
  REGIAO_ID = "regiaoId",
}

export enum UsuarioFieldsNames {
  NOME = "Nome",
  PASSWORD = "Senha",
  USERNAME = "Nome de Usuário",
  CPF = "CPF",
  RG = "RG",
  ENDERECO = "Endereco",
  TELEFONE = "Telefone",
  EMAIL = "Email",
  PERFIS = "Perfis",
  ALOCACAO_CAMPO = "alocacaoFuncionarioCampo",
  ALOCACAO_GERENCIA = "alocacaoGerencia",
  REGIAO = "Região",
}
