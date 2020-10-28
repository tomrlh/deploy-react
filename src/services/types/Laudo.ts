import { Cliente } from "./Cliente";

export type Laudo = {
  id: number;
  itemOSId: number;
  placa: string;
  pesoTransporte: string;
  notaFiscal: string;
  veiculoVistoriado: string;
  insetosVivos: string;
  insetosMortos: string;
  odorEstranho: string;
  sementesToxicas: string;
  pesoAmostra: string;
  coletaAmostra: string;
  mei: string;
  umidade: string;
  mofados: string;
  ardidos: string;
  fermentados: string;
  germinados: string;
  quebrados: string;
  queimados: string;
  picados: string;
  imaturos: string;
  chochos: string;
  esverdeados: string;
  gessados: string;
  danificados: string;
};

export enum LaudoFieldsAPI {
  PLACA = "placa",
  PESO_TRANSPORTE = "pesoTransporte",
  NOTA_FISCAL = "notaFiscal",
  VISTORIADO = "veiculoVistoriado",
  INSETOS_VIVOS = "insetosVivos",
  INSETOS_MORTOS = "insetosMortos",
  ODOR_ESTRANHO = "odorEstranho",
  SEMENTES_TOXICAS = "sementesToxicas",
  PESO_AMOSTRA = "pesoAmostra",
  COLETA_AMOSTRA = "coletaAmostra",
  MEI = "mei",
  UMIDADE = "umidade",
  MOFADOS = "mofados",
  ARDIDOS = "ardidos",
  FERMENTADOS = "fermentados",
  GERMINADOS = "germinados",
  QUEBRADOS = "quebrados",
  QUEIMADOS = "queimados",
  PICADOS = "picados",
  IMATUROS = "imaturos",
  CHOCHOS = "chochos",
  ESVERDEADOS = "esverdeados",
  GESSADOS = "gessados",
  DANIFICADOS = "danificados",
}

export enum LaudoFieldsNames {
  PLACA = "Placa",
  PESO_TRANSPORTE = "Peso do Veículo",
  NOTA_FISCAL = "Nota Fiscal",
  VISTORIADO = "Veículo Vistoriado",
  INSETOS_VIVOS = "Insetos Vivos",
  INSETOS_MORTOS = "Insetos Mortos",
  ODOR_ESTRANHO = "Odor Estranho",
  SEMENTES_TOXICAS = "Sementes Tóxicas",
  PESO_AMOSTRA = "Peso da Amostra",
  COLETA_AMOSTRA = "Coleta da Amostra",
  MEI = "M.E.I.",
  UMIDADE = "Umidade",
  MOFADOS = "Mofados",
  ARDIDOS = "Ardidos",
  FERMENTADOS = "Fermentados",
  GERMINADOS = "Germinados",
  QUEBRADOS = "Quebrados",
  QUEIMADOS = "Queimados",
  PICADOS = "Picados",
  IMATUROS = "Imaturos",
  CHOCHOS = "Chochos",
  ESVERDEADOS = "Esverdeados",
  GESSADOS = "Gessados",
  DANIFICADOS = "Danificados",
  TOTAL_AVARIADOS = "Total de Avariados",
}
