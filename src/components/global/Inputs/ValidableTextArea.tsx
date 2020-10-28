import React from "react";
import { TextArea } from "semantic-ui-react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { property } from "lodash";

export default function ValidableTextArea(props: {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  required: boolean;
}) {
  return (
    <div
      className={
        !props.errors[props.nomeCampo]
          ? "form-group flex-field"
          : "form-group flex-field has-danger"
      }
    >
      <label>{props.nomeExibido}</label>
      <TextArea
        name={props.nomeCampo}
        placeholder={props.nomeExibido}
        ref={props.register({
          required: props.required,
        })}
      />
    </div>
  );
}

ValidableTextArea.defaultProps = {
  required: true,
};
