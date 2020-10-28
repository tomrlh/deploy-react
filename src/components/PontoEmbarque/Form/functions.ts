import { PontoEmbarqueFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";
import { ContratoFromAPI } from "services/types/Contrato";

export const showSavePontoEmbarqueStatus = (
  response: any
  // contratoToUpdate: ContratoFromAPI
) => {
  if (response && response.status === 200) {
    console.log("showSavePontoEmbarqueStatus");
    notyfSuccess(PontoEmbarqueFormMessages.SUCCESS);
    return true;
  } else {
    notyfError(PontoEmbarqueFormMessages.ERROR);
    return false;
  }
};

export const showDestroyResponsavelStatus = (response: any) => {
  console.log("showDestroyResponsavelStatus");
  if (response && response.status === 200) {
    notyfSuccess(PontoEmbarqueFormMessages.DELETE);
    return true;
  } else {
    notyfError(PontoEmbarqueFormMessages.ERROR);
    return false;
  }
};
