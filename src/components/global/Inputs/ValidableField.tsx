import React from "react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";

export default function ValidableField(props: {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  required: boolean;
  password: boolean;
  number: boolean;
}) {
  const getType = () => {
    if (props.password) return "password";
    else if (props.number) return "number";
    else return "text";
  };

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
        type={getType()}
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
        })}
      />
    </div>
  );
}

ValidableField.defaultProps = {
  setValue: null,
  required: true,
  password: false,
  number: false,
};
