import { ItemOS } from "./ItemOS";
import { Usuario } from "./Usuario";

export interface OrdemServico extends IOrdemServico {
  id: number;
}

export interface IOrdemServico {
  supervisorId: number;
  supervisores: Usuario[];
  contratoId: number;
  status: string;
  itens: ItemOS[];
  dataInicio: string;
}

export enum OrdemServicoFieldsAPI {
  SUPERVISOR = "supervisorId",
  CONTRATO = "contratoId",
  STATUS = "status",
  ITENS = "itensIds",
  DATA_INICIO = "dataInicio",
}

export enum OrdemServicoFieldsNames {
  SUPERVISOR = "Supervisão",
  CONTRATO = "Contrato",
  STATUS = "Status",
  ITENS = "Itens",
  DATA_INICIO = "Data de Início",
}
