import React, { useEffect } from "react";
import { Button, Divider, Icon, Form, Header } from "semantic-ui-react";
import { LaudoFieldsNames, LaudoFieldsAPI } from "services/types/Laudo";
import { onChange } from "services/validators/form-validators";
import { HookFormValidator } from "services/types/Validators/FormValidator";
import InputMask from "react-input-mask";
import ValidableInputMasked from "components/global/Inputs/ValidableInputMasked";
import ValidableField from "components/global/Inputs/ValidableField";

export default function QualidadeFields(props: HookFormValidator) {
  return (
    <div>
      <Header as="h3">Qualidade</Header>
      <div className="flex-form-group">
        <ValidableField
          nomeCampo={LaudoFieldsAPI.MEI}
          nomeExibido={LaudoFieldsNames.MEI}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.UMIDADE}
          nomeExibido={LaudoFieldsNames.UMIDADE}
          errors={props.errors}
          register={props.register}
        />

        <label>Odor Estranho</label>
        <select id="inputState" className="form-control">
          <option selected></option>
          <option key="1" value="sim">
            Sim
          </option>
          <option key="2" value="nao">
            Não
          </option>
        </select>

        <ValidableField
          nomeCampo={LaudoFieldsAPI.PESO_AMOSTRA}
          nomeExibido={LaudoFieldsNames.PESO_AMOSTRA}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.COLETA_AMOSTRA}
          nomeExibido={LaudoFieldsNames.COLETA_AMOSTRA}
          errors={props.errors}
          register={props.register}
          number={true}
        />
      </div>

      <div className="flex-form-group">
        <ValidableField
          nomeCampo={LaudoFieldsAPI.INSETOS_VIVOS}
          nomeExibido={LaudoFieldsNames.INSETOS_VIVOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.INSETOS_MORTOS}
          nomeExibido={LaudoFieldsNames.INSETOS_MORTOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.SEMENTES_TOXICAS}
          nomeExibido={LaudoFieldsNames.SEMENTES_TOXICAS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.MOFADOS}
          nomeExibido={LaudoFieldsNames.MOFADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.ARDIDOS}
          nomeExibido={LaudoFieldsNames.ARDIDOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.GERMINADOS}
          nomeExibido={LaudoFieldsNames.GERMINADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.FERMENTADOS}
          nomeExibido={LaudoFieldsNames.FERMENTADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />
      </div>

      {/* ESPECÍFICOS DE SOJA */}
      <div className="flex-form-group">
        <ValidableField
          nomeCampo={LaudoFieldsAPI.QUEBRADOS}
          nomeExibido={LaudoFieldsNames.QUEBRADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.QUEIMADOS}
          nomeExibido={LaudoFieldsNames.QUEIMADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.PICADOS}
          nomeExibido={LaudoFieldsNames.PICADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.IMATUROS}
          nomeExibido={LaudoFieldsNames.IMATUROS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.CHOCHOS}
          nomeExibido={LaudoFieldsNames.CHOCHOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.ESVERDEADOS}
          nomeExibido={LaudoFieldsNames.ESVERDEADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />
      </div>

      {/* ESPECÍFICOS DE MILHO */}
      <div className="flex-form-group">
        <ValidableField
          nomeCampo={LaudoFieldsAPI.GESSADOS}
          nomeExibido={LaudoFieldsNames.GESSADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />

        <ValidableField
          nomeCampo={LaudoFieldsAPI.DANIFICADOS}
          nomeExibido={LaudoFieldsNames.DANIFICADOS}
          errors={props.errors}
          register={props.register}
          number={true}
        />
      </div>
    </div>
  );
}
