import { Cliente } from "./Cliente";
import { OrdemServico } from "./OrdemServico";

// verificar se type Contrato é necessário
export type ContratoFromAPI = {
  id: number;
  dataFechamento: string;
  dataVencimento: string;
  periodicidadePagamento: string;
  reaisPorTonelada: number;
  reaisPorToneladaOGM: number;
  cliente: Cliente;
  ordensServico: OrdemServico;
  contratoUrl: string;
  contratoKey: string;
  clienteId: string;
  contratoFile: File;
};

export interface IContrato {
  dataFechamento: string;
  dataVencimento: string;
  periodicidadePagamento: string;
  reaisPorTonelada: number;
  reaisPorToneladaOGM: number;
  clienteId: string;
  contratoFile: File;
}

export enum ContratoFieldsAPI {
  DATA_FECHAMENTO = "dataFechamento",
  DATA_VENCIMENTO = "dataVencimento",
  PERIODICIDADE_PAGAMENTO = "periodicidadePagamento",
  REAIS_TONELADA = "reaisPorTonelada",
  REAIS_TONELADA_OGM = "reaisPorToneladaOGM",
  CLIENTE = "clienteId",
  CONTRATO = "contratoFile",
}

export enum ContratoFieldsNames {
  DATA_FECHAMENTO = "Data de Início",
  DATA_VENCIMENTO = "Data de Vencimento",
  PERIODICIDADE_PAGAMENTO = "Periodicidade de Pagamento",
  REAIS_TONELADA = "R$/Ton",
  REAIS_TONELADA_OGM = "R$/Ton (OGM)",
  CLIENTE = "Cliente",
  CONTRATO = "Contrato e anexos",
}
