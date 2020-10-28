import React, { useContext, useEffect } from "react";
import { Icon, Header } from "semantic-ui-react";
import {
  ResponsavelClienteFieldsNames,
  ResponsavelClienteFieldsAPI,
  ResponsavelCliente,
} from "services/types/ResponsavelCliente";
import { post, update } from "services/requests/ResponsavelCliente";
import ValidableField from "components/global/Inputs/ValidableField";
import { useForm } from "react-hook-form";
import {
  atualizarResponsaveis,
  showSaveStatusMessage,
} from "components/Cliente/Form/functions";
import ValidableEmailField from "components/global/Inputs/ValidableEmailField";
import ValidableInputMasked from "components/global/Inputs/ValidableInputMasked";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";

type Props = {
  isEditing: boolean;
  responsavel: ResponsavelCliente;
  udpateModalState: Function;
};

const ResponsavelForm = (props: Props) => {
  const { responsaveisCliente, setResponsaveisCliente } = useContext(
    ClienteFormContext
  );
  const { register, handleSubmit, errors, setValue, reset } = useForm();

  const onSubmit = async (data: { [x: string]: any }) => {
    let responsavelClienteData = data as ResponsavelCliente;

    let response = props.isEditing
      ? await update(props.responsavel.id.toString(), responsavelClienteData)
      : await post(responsavelClienteData);

    console.log("RESPONSE ", response);

    showSaveStatusMessage(response, props.isEditing);

    let updatedResponsaveis = atualizarResponsaveis(
      response.data,
      responsaveisCliente
    );

    setResponsaveisCliente([]);
    setResponsaveisCliente([]);
    setResponsaveisCliente([...updatedResponsaveis]);
    reset();
    if (props.udpateModalState) props.udpateModalState(false);
  };

  useEffect(() => {
    /*eslint-disable */
    const preencheForm = async () => {
      if (props.isEditing && props.responsavel) {
        Object.values(ResponsavelClienteFieldsAPI).forEach((campo) => {
          setValue(campo, props.responsavel[campo]);
        });
      } else return;
    };
    preencheForm();
  }, []);

  return (
    <div>
      <Header as="h5">
        <Icon name="user" />
        Outro Responsável
      </Header>
      <form>
        <fieldset>
          <div className="flex-form-group">
            <ValidableField
              nomeCampo={ResponsavelClienteFieldsAPI.NOME}
              nomeExibido={ResponsavelClienteFieldsNames.NOME}
              errors={errors}
              register={register}
              required={true}
            />

            <ValidableField
              nomeCampo={ResponsavelClienteFieldsAPI.POSICAO}
              nomeExibido={ResponsavelClienteFieldsNames.POSICAO}
              errors={errors}
              register={register}
              required={true}
            />

            <ValidableEmailField
              nomeCampo={ResponsavelClienteFieldsAPI.EMAIL}
              nomeExibido={ResponsavelClienteFieldsNames.EMAIL}
              errors={errors}
              register={register}
              required={false}
            />

            <ValidableInputMasked
              mask="(99) 99999-9999"
              fieldName={ResponsavelClienteFieldsAPI.TELEFONE}
              displayName={ResponsavelClienteFieldsNames.TELEFONE}
              errors={errors}
              setValue={setValue}
              register={register}
              required={false}
            />
          </div>
        </fieldset>
      </form>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleSubmit(onSubmit)}
      >
        <i className="add icon"></i>
        {!props.isEditing ? "Cadastrar Responsável" : "Atualizar Responsável"}
      </button>
    </div>
  );
};

export default ResponsavelForm;

ResponsavelForm.defaultProps = {
  isEditing: false,
  responsavel: {},
  udpateModalState: null,
};
