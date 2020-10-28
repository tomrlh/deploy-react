import { ContratoFromAPI } from "services/types/Contrato";
import { OrdemServico } from "services/types/OrdemServico";
import * as OrdemServicoReq from "services/requests/OrdemServico/OrdemServico";
import { Usuario } from "services/types/Usuario";

export const getOSByCliente = async (usuario: Usuario) => {
  let ordensServico: OrdemServico[] = await OrdemServicoReq.getByCliente();
  return ordensServico;
};

export const getOSByContrato = async (selectedContrato: ContratoFromAPI) => {
  let ordensServico: OrdemServico[] = await OrdemServicoReq.getByContrato(
    selectedContrato.id.toString()
  );
  return ordensServico;
};

export const getOSBySelectedContrato = async (
  newSelectedContrato: ContratoFromAPI,
  prevOrdensServico: OrdemServico[] | undefined,
  setOrdensServicoAndLS: Function
) => {
  if (!newSelectedContrato || Object.keys(newSelectedContrato).length <= 0)
    return;
  let ordensServicoPaginated: OrdemServico[] = await OrdemServicoReq.getByContrato(
    newSelectedContrato.id.toString()
  );
  let isNewOrdensServico =
    JSON.stringify(prevOrdensServico) !==
    JSON.stringify(ordensServicoPaginated);
  if (isNewOrdensServico) {
    setOrdensServicoAndLS(ordensServicoPaginated);
  }
};

export const getOSBySupervisor = async (
  newSelectedContrato: ContratoFromAPI,
  prevOrdensServico: OrdemServico[] | undefined,
  setOrdensServicoAndLS: Function
) => {
  if (!newSelectedContrato || Object.keys(newSelectedContrato).length <= 0)
    return;
  let ordensServicoPaginated: OrdemServico[] = await OrdemServicoReq.getByContrato(
    newSelectedContrato.id.toString()
  );
  let isNewOrdensServico =
    JSON.stringify(prevOrdensServico) !==
    JSON.stringify(ordensServicoPaginated);
  if (isNewOrdensServico) {
    setOrdensServicoAndLS(ordensServicoPaginated);
  }
};

export const getOSBySupervisorOnly = async (
  id: string | number,
  prevOrdensServico: OrdemServico[] | undefined,
  setOrdensServicoAndLS: Function
) => {
  let ordensServicoPaginated: OrdemServico[] = await OrdemServicoReq.getBySupervisor(
    id
  );
  let isNewOrdensServico =
    JSON.stringify(prevOrdensServico) !==
    JSON.stringify(ordensServicoPaginated);
  if (isNewOrdensServico) {
    setOrdensServicoAndLS(ordensServicoPaginated);
  }
};
