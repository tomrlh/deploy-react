import React, { useEffect, useContext } from "react";
import { Segment } from "semantic-ui-react";
import {
  Cliente,
  ClienteFieldsAPI,
  ClienteFieldsNames,
} from "services/types/Cliente";
import GestorContratoFields from "./FieldGroups/GestorContratoFields";
import EmpresaFields from "./FieldGroups/EmpresaFields";
import { post, update } from "services/requests/Clientes/Clientes";
import { postClientUser } from "services/requests/Usuarios/Usuarios";
import { useForm } from "react-hook-form";
import * as functions from "./functions";
import ResponsavelClienteForm from "./FieldGroups/ResponsavelCliente/Form";
import ResponsaveisClienteTable from "../Form/FieldGroups/ResponsavelCliente/Table";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";
import FileUploader from "components/global/Inputs/FileUploader";
import PageHeader from "components/global/Commons/PageHeader";

type Props = {
  isEditing: boolean;
  cliente: Cliente;
  udpateModalState: Function;
};

const ClienteForm = (props: Props) => {
  const { clientes, setClientes, setResponsaveisCliente } = useContext(
    ClienteFormContext
  );
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    trigger,
    reset,
  } = useForm();

  const onSubmit = async (data: { [x: string]: any }) => {
    let cliente = data as Cliente;
    let isToUpdate = props.isEditing;
    let clienteId = props.cliente.id;

    let response = isToUpdate
      ? await update(clienteId.toString(), cliente)
      : await post(cliente);

    // if foi criado um novo
    if (!isToUpdate) {
      let usuarioResponse = await postClientUser(
        data.cnpj + "@email.com",
        "123@mudar",
        [6]
      );
      console.log(usuarioResponse);
    }

    console.log("CLIENTE RESPONSE", response);

    let resultWasOk = functions.showSaveStatusMessage(response, isToUpdate);

    let updatedClientes = functions.atualizarClientes(response.data, clientes);
    setClientes([...updatedClientes]);

    if (resultWasOk) reset();
    if (props.udpateModalState) props.udpateModalState(false);
  };

  useEffect(() => {
    console.log("AQUI", props);
    const chamaPreencherCliente = async () => {
      // preenche o cliente
      if (props.isEditing && props.cliente) {
        Object.values(ClienteFieldsAPI).forEach((campo) => {
          setValue(campo, props.cliente[campo]);
        });
      } else return;
      // preenche os responsáveis
      if (props.cliente && props.cliente.responsaveis) {
        setResponsaveisCliente([]);
        setResponsaveisCliente([]);
        setResponsaveisCliente([...props.cliente.responsaveis]);
      }
    };

    if (props.isEditing) {
      /*eslint-disable */
      chamaPreencherCliente();
    } else {
      setResponsaveisCliente([]);
    }
  }, []);

  return (
    <div className="container">
      <PageHeader
        iconPath="/icons/customer/customer-128px.png"
        title={!props.isEditing ? "Novo Cliente" : "Editando Cliente"}
      />

      <form>
        <fieldset>
          <EmpresaFields
            register={register}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
          />

          <GestorContratoFields
            register={register}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
          />

          <FileUploader
            nomeCampo={ClienteFieldsAPI.LOGO}
            nomeExibido={ClienteFieldsNames.LOGO}
            errors={errors}
            register={register}
            setValue={setValue}
            required={false}
          />
        </fieldset>
      </form>
      <br />
      <Segment>
        <ResponsavelClienteForm />
        <br />
        <ResponsaveisClienteTable />
      </Segment>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleSubmit(onSubmit)}
      >
        <i className="add icon"></i>
        {!props.isEditing ? "Cadastrar" : "Atualizar"}
      </button>
    </div>
  );
};

export default ClienteForm;

ClienteForm.defaultProps = {
  isEditing: false,
  cliente: {},
  udpateModalState: null,
};
