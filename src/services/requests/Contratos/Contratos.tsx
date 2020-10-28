import {
  axiosInstance as axios,
  CustomResponseType,
  formatAxiosResponse,
  defaultHeaders,
} from "../globals";
import {
  ContratoFromAPI,
  ContratoFieldsAPI,
  IContrato,
} from "services/types/Contrato";

export const get = async (): Promise<ContratoFromAPI[]> => {
  let res: ContratoFromAPI[] = await axios
    .get("contratos", defaultHeaders)
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const getByUsuario = async (): Promise<ContratoFromAPI[]> => {
  let res: ContratoFromAPI[] = await axios
    .get("contratos-por-usuario-logado", defaultHeaders)
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const download = async (contratoKey: string): Promise<any> => {
  console.log(axios.getUri());
  let res: any = await axios
    .get(`download/${contratoKey}`, defaultHeaders)
    .then((response) => response.data)
    .catch((error) => error);

  var link = document.createElement("a");
  link.download = "arquivo.pdf";
  let blob = new Blob([res], { type: "application/pdf" });
  let data = window.URL.createObjectURL(blob);
  link.href = data;
  link.click();
  window.open(data);

  return res;
};

export const post = async (
  contrato: IContrato
): Promise<CustomResponseType> => {
  let bodyFormData = contratoToFormData(contrato);
  let res: CustomResponseType = await axios
    .post("contratos", bodyFormData, {
      headers: {
        "Content-Type": undefined, // assim o browser define o boundary do form automaticamente
      },
    })
    .then((response) => formatAxiosResponse(response, false))
    .catch((error) => formatAxiosResponse(error, true));

  return res;
};

const contratoToFormData = (contrato: IContrato) => {
  var formData = new FormData() as FormData;
  // abstrair isto
  formData.append(ContratoFieldsAPI.DATA_FECHAMENTO, contrato.dataFechamento);
  formData.append(ContratoFieldsAPI.DATA_VENCIMENTO, contrato.dataVencimento);
  formData.append(
    ContratoFieldsAPI.PERIODICIDADE_PAGAMENTO,
    contrato.periodicidadePagamento
  );
  formData.append(
    ContratoFieldsAPI.REAIS_TONELADA,
    contrato.reaisPorTonelada.toString()
  );
  formData.append(
    ContratoFieldsAPI.REAIS_TONELADA_OGM,
    contrato.reaisPorToneladaOGM.toString()
  );
  formData.append(ContratoFieldsAPI.CLIENTE, contrato.clienteId);
  formData.append(ContratoFieldsAPI.CONTRATO, contrato.contratoFile);
  return formData;
};
