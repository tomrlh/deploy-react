import { ResponsavelCliente } from "services/types/ResponsavelCliente";

export interface Cliente extends ICliente {
  id: number;
}

export interface ICliente {
  cnpj: string;
  razaoSocial: string;
  inscricaoEstadual: string;
  gestorContratoNome: string;
  gestorContratoEmail: string;
  gestorContratoTelefone: string;
  responsaveis: ResponsavelCliente[];
  responsaveisIds: Array<string>;
  logoUrl: File;
  logoFile: File;
}

export enum ClienteFieldsAPI {
  RAZAO_SOCIAL = "razaoSocial",
  CNPJ = "cnpj",
  INSCRICAO_ESTADUAL = "inscricaoEstadual",
  GESTOR_CONTRATO_NOME = "gestorContratoNome",
  GESTOR_CONTRATO_EMAIL = "gestorContratoEmail",
  GESTOR_CONTRATO_TELEFONE = "gestorContratoTelefone",
  RESPONSAVEIS = "responsaveisIds",
  LOGO = "logoFile",
}

export enum ClienteFieldsNames {
  RAZAO_SOCIAL = "Razão Social",
  CNPJ = "CNPJ",
  INSCRICAO_ESTADUAL = "Inscrição Estadual",
  GESTOR_CONTRATO_NOME = "Nome",
  GESTOR_CONTRATO_EMAIL = "Email",
  GESTOR_CONTRATO_TELEFONE = "Telefone",
  RESPONSAVEIS = "Outros Responsáveis",
  LOGO = "Imagem ou logo do cliente",
}
