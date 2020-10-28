import { ContratoFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";
import { ContratoFromAPI } from "services/types/Contrato";

export const showSaveContratoStatus = (
  response: any,
  contratoToUpdate: ContratoFromAPI
) => {
  if (response && response.status === 200) {
    // let message = !contratoToUpdate
    //   ? ContratoFormMessages.SUCCESS
    //   : ContratoFormMessages.UPDATE;
    let message = ContratoFormMessages.SUCCESS;
    notyfSuccess(message);
    return true;
  } else {
    notyfError(ContratoFormMessages.ERROR);
    return false;
  }
};

export const showDestroyResponsavelStatus = (response: any) => {
  if (response && response.status === 200) {
    notyfSuccess(ContratoFormMessages.DELETE);
    return true;
  } else {
    notyfError(ContratoFormMessages.ERROR);
    return false;
  }
};
