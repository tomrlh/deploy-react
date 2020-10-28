export enum ResponsavelClienteFieldsAPI {
  NOME = "nome",
  POSICAO = "posicao",
  EMAIL = "email",
  TELEFONE = "telefone",
  CLIENTE = "clienteId",
}

export enum ResponsavelClienteFieldsNames {
  NOME = "Nome",
  POSICAO = "Cargo/Posição",
  EMAIL = "Email",
  TELEFONE = "Telefone",
  CLIENTE = "Cliente",
}

export interface ResponsavelCliente extends IResponsavelCliente {
  id: number;
}

export interface IResponsavelCliente {
  nome: string;
  posicao: string;
  email: string;
  telefone: string;
  clienteId: string;
}
