import { Laudo, LaudoFieldsAPI } from "services/types/Laudo";
import { find } from "services/requests/Laudo";
import jsPDF from "jspdf";
import { LaudoFormMessages } from "./constants";
import { notyfError, notyfSuccess } from "utils/notifications";

export const preencheLaudo = async (id: string, setValue: Function) => {
  if (id) {
    let laudo: Laudo = await find(id);
    Object.values(LaudoFieldsAPI).forEach((campo) => {
      setValue(campo, laudo[campo]);
    });
    return laudo;
  }
};

export const showSaveStatusMessage = (response: any, isToUpdate: boolean) => {
  if (response && response.status === 200) {
    let message = !isToUpdate
      ? LaudoFormMessages.SUCCESS
      : LaudoFormMessages.UPDATE;

    notyfSuccess(message);
    return true;
  } else {
    notyfError(LaudoFormMessages.ERROR);
    return false;
  }
};

export const somarGraosAvariados = (laudo: Laudo) => {
  let totalAvariados =
    Number(laudo.sementesToxicas) +
    Number(laudo.quebrados) +
    Number(laudo.queimados) +
    Number(laudo.ardidos) +
    Number(laudo.mofados) +
    Number(laudo.fermentados) +
    Number(laudo.picados) +
    Number(laudo.germinados) +
    Number(laudo.imaturos) +
    Number(laudo.chochos) +
    Number(laudo.esverdeados);

  return totalAvariados;
};

export const gerarLaudo = (laudo: Laudo) => {
  let leftMargin = 20,
    topMargin = 20,
    increment = 20;
  var doc = new jsPDF("p", "pt");

  const addLine = (text: string) => {
    topMargin += increment;
    doc.setLineWidth(1);
    doc.text(text, leftMargin, topMargin);
  };

  // max characters per line tested: 87
  addLine("Agroquality LTDA");
  addLine("------------------------------------------");
  addLine("CNPJ: 11.222.333/4444-80");
  addLine("Endereço:");
  addLine("------------------------------------------");
  addLine("- ORDEM DE SERVIÇO -");
  addLine("Contrato: 1-2020");
  addLine("Ordem de Serviço: 1-2020");
  addLine("Data da Classificação: ");
  addLine("10/10/2020");
  addLine("Município: Carolina-MA");
  addLine("Ponto de Embarque: ");
  addLine("Fazenda Rio Grande");
  addLine("Origem: ponto A");
  addLine("Destino: ponto B");
  addLine("peso: 300 ton");
  addLine("Carretas: 100");
  addLine("Produto: Soja");
  addLine("------------------------------------------");
  addLine("- LAUDO -");
  addLine("Placa do veículo: " + laudo.placa);
  addLine("Peso do veículo (tons):" + laudo.pesoTransporte + "%");
  addLine("Veículo Vistoriado: " + laudo.veiculoVistoriado);
  addLine("Nota Fiscal: " + laudo.notaFiscal);
  // addLine("Insetos Vivos: " + laudo.insetosVivos);
  // addLine("Insetos Mortos: " + laudo.insetosMortos);
  addLine("Odor Estranho: " + laudo.odorEstranho);
  addLine("Sementes Tóxicas: " + laudo.sementesToxicas);
  addLine("Peso da amostra: " + laudo.pesoAmostra);
  addLine("M.E.I: " + laudo.mei);
  addLine("Umidade: " + laudo.umidade + "%");
  addLine("Quebrados: " + laudo.quebrados + "%");
  addLine("Queimados: " + laudo.queimados + "%");
  addLine("Ardidos: " + laudo.ardidos + "%");
  addLine("Mofados: " + laudo.mofados + "%");
  addLine("Fermentados: " + laudo.fermentados + "%");
  addLine("Picados: " + laudo.picados + "%");
  addLine("Germinados: " + laudo.germinados + "%");
  addLine("Imaturos: " + laudo.imaturos + "%");
  addLine("Chochos: " + laudo.chochos + "%");
  addLine("Esverdeados: " + laudo.esverdeados + "%");
  addLine("Total de Avariados: " + somarGraosAvariados(laudo));
  addLine("------------------------------------------");
  addLine("Assinatura do Classificador");
  addLine("");
  addLine("");
  addLine("");
  addLine("____________________________________________________________");

  doc.save(`laudo-${laudo.id}-2020`);
};
