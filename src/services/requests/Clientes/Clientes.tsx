import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
  defaultHeaders,
} from "../globals";
import { ICliente, ClienteFieldsAPI, Cliente } from "services/types/Cliente";

export const get = async (): Promise<Cliente[]> => {
  console.log("TOKEN BEFORE SUBMIT", localStorage.getItem("token"));
  let res: Cliente[] = await axios
    .get("clientes", defaultHeaders)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const find = async (id: string): Promise<Cliente> => {
  let res: Cliente = await axios
    .get(`clientes/${id}`)
    .then((response) => response.data)
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

export const post = async (cliente: ICliente): Promise<CustomResponseType> => {
  let bodyFormData = clienteToFormData(cliente);
  let res: CustomResponseType = await axios
    .post("clientes", bodyFormData, {
      headers: {
        "Content-Type": undefined, // assim o browser define o boundary do form automaticamente
      },
    })
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

export const update = async (
  id: string,
  cliente: ICliente
): Promise<CustomResponseType> => {
  let res: CustomResponseType = await axios
    .put(`clientes/${id}`, cliente)
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));
  return res;
};

const clienteToFormData = (cliente: ICliente) => {
  var formData = new FormData() as FormData;
  // abstrair isto
  formData.append(ClienteFieldsAPI.CNPJ, cliente.cnpj);
  formData.append(
    ClienteFieldsAPI.INSCRICAO_ESTADUAL,
    cliente.inscricaoEstadual
  );
  formData.append(ClienteFieldsAPI.RAZAO_SOCIAL, cliente.razaoSocial);
  formData.append(
    ClienteFieldsAPI.GESTOR_CONTRATO_NOME,
    cliente.gestorContratoNome
  );
  formData.append(
    ClienteFieldsAPI.GESTOR_CONTRATO_EMAIL,
    cliente.gestorContratoEmail
  );
  formData.append(
    ClienteFieldsAPI.GESTOR_CONTRATO_TELEFONE,
    cliente.gestorContratoTelefone
  );
  formData.append(ClienteFieldsAPI.LOGO, cliente.logoFile);
  formData.append(
    ClienteFieldsAPI.RESPONSAVEIS,
    JSON.stringify(cliente.responsaveisIds)
  );
  return formData;
};
