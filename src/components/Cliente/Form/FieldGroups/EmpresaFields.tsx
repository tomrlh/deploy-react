import React, { useEffect } from "react";
import { Button, Divider, Icon, Form, Header } from "semantic-ui-react";
import { ClienteFieldsNames, ClienteFieldsAPI } from "services/types/Cliente";
import { onChange } from "services/validators/form-validators";
import { HookFormValidator } from "services/types/Validators/FormValidator";
import InputMask from "react-input-mask";
import ValidableInputMasked from "components/global/Inputs/ValidableInputMasked";
import ValidableField from "components/global/Inputs/ValidableField";

export default function EmpresaFields(props: HookFormValidator) {
  return (
    <div className="flex-form-group">
      <ValidableField
        nomeCampo={ClienteFieldsAPI.RAZAO_SOCIAL}
        nomeExibido={ClienteFieldsNames.RAZAO_SOCIAL}
        errors={props.errors}
        register={props.register}
      />

      <ValidableInputMasked
        mask="99.999.999/9999-99"
        regex={/\d{2}.?\d{3}.?\d{3}\/?\d{4}-?\d{2}/g}
        fieldName={ClienteFieldsAPI.CNPJ}
        displayName={ClienteFieldsNames.CNPJ}
        errors={props.errors}
        setValue={props.setValue}
        register={props.register}
      />

      <ValidableField
        nomeCampo={ClienteFieldsAPI.INSCRICAO_ESTADUAL}
        nomeExibido={ClienteFieldsNames.INSCRICAO_ESTADUAL}
        errors={props.errors}
        register={props.register}
      />
    </div>
  );
}
