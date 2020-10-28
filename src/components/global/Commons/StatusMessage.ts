import { notyfSuccess, notyfError } from "utils/notifications";

export const showSaveMessage = (
  response: any,
  isToUpdate: boolean,
  messages: any
) => {
  if (response && response.status === "OK") {
    let message = !isToUpdate ? messages.SUCCESS : messages.UPDATE;

    notyfSuccess(message);
    return true;
  } else {
    notyfError(messages.ERROR);
    return false;
  }
};

export const showDestroyMessage = (response: any, messages: any) => {
  if (response && response.status === "OK") {
    notyfSuccess(messages.DELETE);
    return true;
  } else {
    notyfError(messages.ERROR);
    return false;
  }
};
