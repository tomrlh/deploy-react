import { OrdemServicoFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";

export const showSaveOrdemServicoStatus = (response: any) => {
  if (response && response.status === 200) {
    notyfSuccess(OrdemServicoFormMessages.SUCCESS);
    return true;
  } else {
    notyfError(OrdemServicoFormMessages.ERROR);
    return false;
  }
};
