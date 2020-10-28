import { Laudo } from "./Laudo";
import { PontoEmbarque } from "./PontoEmbarque";
import { Usuario } from "./Usuario";

export interface ItemOS extends IItemOS {
  id: number;
}

export interface IItemOS {
  ordemServicoId: number;
  classificadores: Usuario[];
  laudos: Laudo[];
  classificadorId: number;
  pontoEmbarqueId: number;
  cidadeId: number;
  pontoEmbarque: PontoEmbarque;
  status: string;
  dataClassificacao: string;
  destino: string;
  qtdToneladas: number;
  qtdCarretasDia: number;
  produtoNome: string;
  produtoTeste: string;
  produtoTolerancia: string;
}

export interface ItemOSFromAPI {
  id: number;
  ordem_servico_id: number;
  classificador_id: number;
  pontoEmbarque_id: number;
  laudos: Laudo[];
  status: string;
  data_classificacao: string;
  destino: string;
  qtd_toneladas: number;
  qtd_carretasDia: number;
  produto_nome: string;
  produto_teste: string;
  produto_tolerancia: string;
}

export enum ItemOSFieldsAPI {
  ORDEM_SERVICO = "ordemServicoId",
  SUPERVISOR = "classificadorId",
  PONTO_EMBARQUE = "pontoEmbarqueId",
  STATUS = "status",
  DATA_CLASSIFICACAO = "dataClassificacao",
  DESTINO = "destino",
  QTD_TONELADAS = "qtdToneladas",
  QTD_CARRETAS_DIA = "qtdCarretasDia",
  PRODUTO_NOME = "produtoNome",
  PRODUTO_TESTE = "produtoTeste",
  PRODUTO_TOLERANCIA = "produtoTolerancia",
}

export enum ItemOSFieldsNames {
  ORDEM_SERVICO = "Ordem de Serviço",
  SUPERVISOR = "Supervisor",
  PONTO_EMBARQUE = "Ponto de Embarque",
  STATUS = "Status",
  DATA_CLASSIFICACAO = "Data da Classificação",
  DESTINO = "Destino",
  QTD_TONELADAS = "Qtd. Toneladas",
  QTD_CARRETAS_DIA = "Qtd. Carretas por Dia",
  PRODUTO_NOME = "Nome",
  PRODUTO_TESTE = "Teste",
  PRODUTO_TOLERANCIA = "Padrão",
  CLASSIFICADOR = "Classificador",
}
