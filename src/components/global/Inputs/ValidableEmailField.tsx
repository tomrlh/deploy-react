import React from "react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";

export default function ValidableEmailField(props: {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
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
      <input
        className={
          props.errors[props.nomeCampo]
            ? "form-control is-invalid"
            : "form-control"
        }
        name={props.nomeCampo}
        placeholder={props.nomeExibido}
        onChange={(e) => {
          if (props.setValue) props.setValue(props.nomeCampo, e.target.value);
        }}
        ref={props.register({
          required: props.required,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          },
        })}
      />
    </div>
  );
}

ValidableEmailField.defaultProps = {
  setValue: null,
  required: true,
};
