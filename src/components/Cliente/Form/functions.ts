import { Cliente, ClienteFieldsAPI } from "services/types/Cliente";
import { find } from "services/requests/Clientes/Clientes";
import { find as findResp } from "services/requests/ResponsavelCliente";
import { ResponsavelCliente } from "services/types/ResponsavelCliente";
import { ClienteFormMessages, ResponsavelFormMessages } from "./constants";
import { notyfSuccess, notyfError } from "utils/notifications";
import { ClienteNav } from "routes/navigation/cliente";
import { Notyf } from "notyf";

export const preencheCliente = (
  isEditing: boolean,
  cliente: Cliente,
  setValue: Function
) => {
  if (isEditing && cliente) {
    Object.values(ClienteFieldsAPI).forEach((campo) => {
      setValue(campo, cliente[campo]);
    });
  } else return;
};

export const preencheResponsaveis = async (
  responsaveis: ResponsavelCliente[],
  setResponsaveisCliente: Function
) => {
  let responsaveisCliente: ResponsavelCliente[] = [];
  responsaveis.forEach(async (respCliente) => {
    let respClienteFound: ResponsavelCliente = await findResp(
      respCliente.id.toString()
    );
    if (respClienteFound) {
      responsaveisCliente.push(respClienteFound);
      setResponsaveisCliente(responsaveisCliente);
    }
  });
};

export const atualizarClientes = (newCliente: Cliente, clientes: Cliente[]) => {
  if (!clientes || clientes.length <= 0) {
    return clientes;
  }

  let clienteToUpdate = clientes.find(
    (respCliente) => respCliente.id === newCliente.id
  );
  if (clienteToUpdate) {
    let indexOfOldCliente = clientes.indexOf(clienteToUpdate);
    clientes[indexOfOldCliente] = newCliente;
    return clientes;
  } else {
    clientes.push(newCliente);
  }
  return clientes;
};

export const atualizarResponsaveis = (
  newResponsavel: ResponsavelCliente,
  responsaveisCliente: ResponsavelCliente[]
) => {
  console.log("recebeu", newResponsavel, responsaveisCliente);
  if (!responsaveisCliente) {
    return responsaveisCliente;
  }

  let responsavelToUpdate = responsaveisCliente.find(
    (respCliente) => respCliente.id === newResponsavel.id
  );
  if (responsavelToUpdate) {
    let indexOfOldResponsavel = responsaveisCliente.indexOf(
      responsavelToUpdate
    );
    responsaveisCliente[indexOfOldResponsavel] = newResponsavel;
    return responsaveisCliente;
  } else {
    responsaveisCliente.push(newResponsavel);
  }
  return responsaveisCliente;
};

export const removeResponsavel = (
  id: number,
  responsaveisCliente: ResponsavelCliente[]
) => {
  return responsaveisCliente.filter((respCliente) => respCliente.id !== id);
};

export const showSaveStatusMessage = (response: any, isToUpdate: boolean) => {
  if (response && response.status === 200) {
    let message = !isToUpdate
      ? ResponsavelFormMessages.SUCCESS
      : ResponsavelFormMessages.UPDATE;

    notyfSuccess(message);
    return true;
  } else {
    notyfError(ResponsavelFormMessages.ERROR);
    return false;
  }
};

export const showDestroyResponsavelStatus = (response: any) => {
  if (response && response.status === 200) {
    notyfSuccess(ResponsavelFormMessages.DELETE);
    return true;
  } else {
    notyfError(ResponsavelFormMessages.ERROR);
    return false;
  }
};
