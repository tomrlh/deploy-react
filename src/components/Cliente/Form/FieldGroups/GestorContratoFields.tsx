import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { ClienteFieldsNames, ClienteFieldsAPI } from "services/types/Cliente";
import { HookFormValidator } from "services/types/Validators/FormValidator";
import ValidableField from "components/global/Inputs/ValidableField";
import ValidableInputMasked from "components/global/Inputs/ValidableInputMasked";
import ValidableEmailField from "components/global/Inputs/ValidableEmailField";

export default function GestorContratoFields(props: HookFormValidator) {
  return (
    <div>
      <Header as="h5">
        <Icon name="user" />
        Gestor do Contrato
      </Header>
      <div className="flex-form-group">
        <ValidableField
          nomeCampo={ClienteFieldsAPI.GESTOR_CONTRATO_NOME}
          nomeExibido={ClienteFieldsNames.GESTOR_CONTRATO_NOME}
          errors={props.errors}
          register={props.register}
        />

        <ValidableEmailField
          nomeCampo={ClienteFieldsAPI.GESTOR_CONTRATO_EMAIL}
          nomeExibido={ClienteFieldsNames.GESTOR_CONTRATO_EMAIL}
          errors={props.errors}
          register={props.register}
        />

        <ValidableInputMasked
          mask="(99) 99999-9999"
          fieldName={ClienteFieldsAPI.GESTOR_CONTRATO_TELEFONE}
          displayName={ClienteFieldsNames.GESTOR_CONTRATO_TELEFONE}
          errors={props.errors}
          setValue={props.setValue}
          register={props.register}
        />
      </div>
    </div>
  );
}
