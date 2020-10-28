import React from "react";
import { Header } from "semantic-ui-react";
import { LaudoFieldsNames, LaudoFieldsAPI } from "services/types/Laudo";
import { HookFormValidator } from "services/types/Validators/FormValidator";
import ValidableField from "components/global/Inputs/ValidableField";

export default function TransporteFields(props: HookFormValidator) {
  return (
    <div>
      <Header as="h3">Transporte</Header>
      <div className="flex-form-group">
        <ValidableField
          nomeCampo={LaudoFieldsAPI.PLACA}
          nomeExibido={LaudoFieldsNames.PLACA}
          errors={props.errors}
          register={props.register}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.PESO_TRANSPORTE}
          nomeExibido={LaudoFieldsNames.PESO_TRANSPORTE}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.NOTA_FISCAL}
          nomeExibido={LaudoFieldsNames.NOTA_FISCAL}
          errors={props.errors}
          register={props.register}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.VISTORIADO}
          nomeExibido={LaudoFieldsNames.VISTORIADO}
          errors={props.errors}
          register={props.register}
        />
      </div>
    </div>
  );
}
