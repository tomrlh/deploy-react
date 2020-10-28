import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import {
  IContrato,
  ContratoFieldsAPI,
  ContratoFieldsNames,
  ContratoFromAPI,
} from "services/types/Contrato";
import { post } from "services/requests/Contratos/Contratos";
import { useForm } from "react-hook-form";
import DateSelector from "components/global/Inputs/DateSelector";
import ValidableField from "components/global/Inputs/ValidableField";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import { Cliente } from "services/types/Cliente";
import * as Clientes from "services/requests/Clientes/Clientes";
import { Pagination } from "services/types/Adonis/Pagination";
import CurrencyInput from "components/global/Inputs/CurrencyInput";
import FileUploader from "components/global/Inputs/FileUploader";
import ContratoHeader from "../Components/ContratoHeader";
import { showSaveContratoStatus } from "./functions";
import PageHeader from "components/global/Commons/PageHeader";

export type Props = {
  cliente: ContratoFromAPI;
};

const ContratoForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    reset,
  } = useForm();

  const [clientes, setClientes] = useState<Array<Cliente>>([]);
  const [wasReset, setWasReset] = useState<boolean>(false);

  const onSubmit = async (data: { [x: string]: any }) => {
    console.log("VALUES", getValues(), data, data as IContrato);
    let response = await post(data as IContrato);

    showSaveContratoStatus(response, props.cliente);
    reset();
    setWasReset(true);
  };

  const formatClientes = (clientesToFormat: Cliente[]) => {
    let newClientesFormatados = clientesToFormat.map((cliente) => {
      return {
        id: cliente.id.toString(),
        valor: cliente.id.toString(),
        nome: cliente.razaoSocial,
      };
    });
    return newClientesFormatados;
  };

  useEffect(() => {
    const preencheCliente = async (data: { [x: string]: any }) => {
      if (data) {
        Object.values(ContratoFieldsAPI).forEach((campo) => {
          setValue(campo, props.cliente[campo]);
        });
      }
    };
    preencheCliente(props.cliente);

    const getClientes = async () => {
      let clientesLoaded: Cliente[] = await Clientes.get();
      setClientes(clientesLoaded);
    };
    getClientes();
  }, []);

  return (
    <div className="container">
      <PageHeader
        iconPath="/icons/contract/contract-128px.png"
        title="Novo Contrato"
        withRadius
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-form-group">
          <DateSelector
            nomeCampo={ContratoFieldsAPI.DATA_FECHAMENTO}
            nomeExibido={ContratoFieldsNames.DATA_FECHAMENTO}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
          />

          <DateSelector
            nomeCampo={ContratoFieldsAPI.DATA_VENCIMENTO}
            nomeExibido={ContratoFieldsNames.DATA_VENCIMENTO}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
          />

          <ValidableSelectField
            nomeCampo={ContratoFieldsAPI.CLIENTE}
            nomeExibido={ContratoFieldsNames.CLIENTE}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
            opcoes={formatClientes(clientes)}
          />
        </div>
        <div className="flex-form-group">
          <ValidableField
            nomeCampo={ContratoFieldsAPI.PERIODICIDADE_PAGAMENTO}
            nomeExibido={ContratoFieldsNames.PERIODICIDADE_PAGAMENTO}
            errors={errors}
            register={register}
          />

          <CurrencyInput
            nomeCampo={ContratoFieldsAPI.REAIS_TONELADA}
            nomeExibido={ContratoFieldsNames.REAIS_TONELADA}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
          />

          <CurrencyInput
            nomeCampo={ContratoFieldsAPI.REAIS_TONELADA_OGM}
            nomeExibido={ContratoFieldsNames.REAIS_TONELADA_OGM}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
            required={false}
          />
        </div>
        <div className="flex-form-group">
          <FileUploader
            nomeCampo={ContratoFieldsAPI.CONTRATO}
            nomeExibido={ContratoFieldsNames.CONTRATO}
            errors={errors}
            register={register}
            setValue={setValue}
          />
        </div>

        <div className="flex-form-group">
          <button className="btn btn-outline-success" type="submit">
            <i className="add icon" />
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContratoForm;

ContratoForm.defaultProps = {
  cliente: {},
} as Partial<Props>;
