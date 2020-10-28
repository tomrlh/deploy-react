import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

type Props = {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  required: boolean;
  wasReset: boolean;
};

const formatValue = (value: string) => {
  let valueWithoutCurrencySing = value
    .split("R$")
    .join("")
    .split("$")
    .join("")
    .split(",")
    .join("");
  return Number(valueWithoutCurrencySing);
};

const CurrencyInput = (props: Props) => {
  const [currentValue, setCurrentValue] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    props.setValue(props.nomeCampo, formatValue(e.target.value));
  };

  useEffect(() => {
    /*eslint-disable */
    props.register({ name: props.nomeCampo }, { required: props.required });
    if (props.wasReset) setCurrentValue("");
  }, [props.wasReset]);

  return (
    <div
      className={
        !props.errors[props.nomeCampo]
          ? "form-group flex-field"
          : "form-group flex-field has-danger"
      }
    >
      <label>{props.nomeExibido}</label>
      <NumberFormat
        className={
          props.errors[props.nomeCampo]
            ? "form-control is-invalid"
            : "form-control"
        }
        value={currentValue}
        thousandSeparator=","
        decimalSeparator="."
        decimalScale={2}
        prefix={"R$"}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default CurrencyInput;

CurrencyInput.defaultProps = {
  required: true,
} as Partial<Props>;
