import { Usuario, UsuarioFieldsAPI } from "services/types/Usuario";
import { find } from "services/requests/Usuarios/Usuarios";
import { UsuarioFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";

export const preencheUsuario = async (id: string, setValue: Function) => {
  if (id) {
    let cliente: Usuario = await find(id);
    Object.values(UsuarioFieldsAPI).forEach((campo) => {
      setValue(campo, cliente[campo]);
    });
    return cliente;
  }
};

export const showUsuarioStatus = (
  response: any,
  id: string,
  redirection: Function
) => {
  if (response && response.status === "OK") {
    let message = !id
      ? UsuarioFormMessages.SUCCESS
      : UsuarioFormMessages.UPDATE;

    if (!id) {
      redirection(
        UsuarioFormMessages.SUCCESS + ".\nClique aqui para ir para usuários"
      );
    } else {
      notyfSuccess(UsuarioFormMessages.UPDATE);
    }
    return true;
  } else {
    notyfError(UsuarioFormMessages.ERROR);
    return false;
  }
};

export const normalizeFormData = (data: { [x: string]: any }) => {
  if (data.alocacaoFuncionarioCampoId)
    data.alocacaoFuncionarioCampoId = Number(data.alocacaoFuncionarioCampoId);

  if (data.alocacaoGerenciaId)
    data.alocacaoGerenciaId = Number(data.alocacaoGerenciaId);
};
