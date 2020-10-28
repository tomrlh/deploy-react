import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import React from "react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { Form } from "semantic-ui-react";

type Props = {
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  required: boolean;
};

export default function index(props: Props) {
  const options = () => {
    return [{ key: "1", value: "", text: "asdf" }];
  };

  return (
    <form>
      <ValidableSelectField
        nomeCampo="classificadorId"
        nomeExibido="Classificador"
        opcoes={options()}
        register={props.register}
        errors={props.errors}
        setValue={props.setValue}
        // updateSelectedOption={setSelectedClassificador}
      />

      <button type="submit" className="btn btn-success">
        <i className="pin icon" />
        Vincular
      </button>
    </form>
  );
}
