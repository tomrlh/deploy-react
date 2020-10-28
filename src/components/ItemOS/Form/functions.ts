import { ItemOSFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";
import { ItemOS, ItemOSFieldsAPI } from "services/types/ItemOS";
import { find } from "services/requests/ItemOS";

export const showSaveItemOSStatus = (response: any) => {
  console.log(response.status);
  if (response && response.status === 200) {
    console.log("SUCCESSSSSS");
    notyfSuccess(ItemOSFormMessages.SUCCESS);
    return true;
  } else {
    notyfError(ItemOSFormMessages.ERROR);
    return false;
  }
};

export const preencheItemOS = async (id: string, setValue: Function) => {
  if (id) {
    let itemOS: ItemOS = await find(id);
    Object.values(ItemOSFieldsAPI).forEach((campo) => {
      setValue(campo, itemOS[campo]);
    });
    return itemOS;
  }
};
