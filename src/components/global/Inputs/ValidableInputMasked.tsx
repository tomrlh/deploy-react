import React from "react";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";
import InputMask from "react-input-mask";

export interface Props {
  mask: string;
  regex: RegExp;
  fieldName: string;
  displayName: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  register: Function; // vi necessidade em usar para setar o regex a ser validado,
  // pois usando somente a validação interna isMatching(value, regex) não integrava com
  // a validiação do react-hook-form
  required: boolean;
}

export default function ValidableInputMasked(props: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.setValue(e.target.name, e.target.value);
  };

  return (
    <div
      className={
        !props.errors[props.fieldName]
          ? "form-group flex-field"
          : "form-group flex-field has-danger"
      }
    >
      <label>{props.displayName}</label>
      <InputMask
        mask={props.mask}
        onChange={onChange}
        className={
          props.errors[props.fieldName]
            ? "form-control is-invalid"
            : "form-control"
        }
      >
        <input
          name={props.fieldName}
          placeholder={props.displayName}
          ref={props.register({
            required: props.required,
            pattern: props.regex,
            maxLength: props.mask.length,
          })}
        />
      </InputMask>
    </div>
  );
}

ValidableInputMasked.defaultProps = {
  regex: null,
  required: true,
};
