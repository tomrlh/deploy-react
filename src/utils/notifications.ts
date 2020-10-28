import { Notyf, NotyfEvent } from "notyf";
import { useNavigate } from "react-router-dom";
import { ContratoNav } from "routes/navigation/contrato";

export const notyfSuccess = (message: string) => {
  new Notyf().success({
    message: message,
    position: {
      x: "center",
      y: "bottom",
    },
    duration: 4000,
    dismissible: true,
  });
};

export const notyfSuccessWithRedirect = (message: string) => {
  const notification = new Notyf().success(message);
  notification.on(NotyfEvent.Click, () => {
    //window.location.href = "/";
    let navg = useNavigate();
    navg(ContratoNav.CADASTRAR);
  });
};

export const notyfError = (message: string) => {
  let messageText = message;

  new Notyf().error({
    message: messageText
      ? messageText
      : "Houve um erro durante o cadastro ou atualização",
    position: {
      x: "center",
      y: "bottom",
    },
    duration: 4000,
    dismissible: true,
  });
};

export const notyfWarn = (message: string) => {
  let messageText = message;

  new Notyf().error({
    message: messageText
      ? messageText
      : "Houve um erro durante o cadastro ou atualização",
    position: {
      x: "center",
      y: "bottom",
    },
    duration: 4000,
    dismissible: true,
    background: "#e6b517",
  });
};
