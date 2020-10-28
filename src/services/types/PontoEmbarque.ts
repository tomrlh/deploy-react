import { Cidade } from "./Cidade";

export interface PontoEmbarque {
  id: number;
  nome: string;
  cidade: Cidade;
  cidadeId: string;
  cep: string;
  latitude: string;
  longitude: string;
  roteiro: string;
  link_maps: string;
  responsavel_fazenda_nome: string;
  responsavel_fazenda_telefone: string;
  responsavel_transportadora_nome: string;
  responsavel_transportadora_telefone: string;
}

export enum PontoEmbarqueFieldsAPI {
  NOME = "nome",
  RESPONSAVEIS = "responsaveis",
  CIDADE = "cidadeId",
  BAIRRO = "bairro",
  LOGRADOURO = "logradouro",
  REFERENCIA = "referencia",
  CEP = "cep",
  LATITUDE = "latitude",
  LONGITUDE = "longitude",
  LINK_MAPS = "linkMaps",
  ROTEIRO_CHEGADA = "roteiroChegada",
  RESPONSAVEL_FAZENDA_NOME = "responsavelFazendaNome",
  RESPONSAVEL_FAZENDA_TELEFONE = "responsavelFazendaTelefone",
  RESPONSAVEL_TRANSPORTADORA_NOME = "responsavelTransportadoraNome",
  RESPONSAVEL_TRANSPORTADORA_TELEFONE = "responsavelTransportadoraTelefone",
}
export enum PontoEmbarqueFieldsNames {
  NOME = "Nome do Local/Fazenda",
  RESPONSAVEIS = "responsaveis",
  CIDADE = "Cidade",
  BAIRRO = "Bairro",
  LOGRADOURO = "Logradouro",
  REFERENCIA = "Ponto de Referência",
  CEP = "CEP",
  LATITUDE = "Latitude",
  LONGITUDE = "Longitude",
  LINK_MAPS = "Ver no Google Maps",
  ROTEIRO_CHEGADA = "Roteiro para o Endereço",
  RESPONSAVEL_FAZENDA_NOME = "Nome (Responsável da Fazenda)",
  RESPONSAVEL_FAZENDA_TELEFONE = "Telefone (Responsável da Fazenda)",
  RESPONSAVEL_TRANSPORTADORA_NOME = "Nome (Responsável da Transportadora)",
  RESPONSAVEL_TRANSPORTADORA_TELEFONE = "Telefone (Responsável da Transportadora)",
}
