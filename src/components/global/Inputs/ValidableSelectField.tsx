import React, { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";

type Opcoes = {
  id: string;
  valor: any;
  nome: string;
};

export default function ValidableSelectField(props: {
  nomeCampo: string;
  nomeExibido: string;
  opcoes: any[];
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  wasReset: boolean;
  required: boolean;
  updateSelectedOption: Function;
}) {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
    props.setValue(props.nomeCampo, e.target.value);
    console.log(e.target.value);
    if (props.updateSelectedOption) {
      props.updateSelectedOption(
        props.opcoes.find((opcao) => opcao.id.toString() === e.target.value)
      );
    }
  };

  useEffect(() => {
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

      <select
        className={
          props.errors[props.nomeCampo]
            ? "form-control is-invalid"
            : "form-control"
        }
        name={props.nomeCampo}
        value={currentValue}
        onChange={handleChange}
        ref={props.register({
          required: props.required,
        })}
      >
        <option value="" className="item">
          Selecione
        </option>

        {props.opcoes.length > 0 ? (
          <>
            {props.opcoes.map((opcao, index) => (
              <option
                key={opcao.nome + "-" + index}
                value={opcao.id}
                className="item"
              >
                {opcao.nome}
              </option>
            ))}
          </>
        ) : (
          <>Sem clientes cadastrados</>
        )}
      </select>
    </div>
  );
}

ValidableSelectField.defaultProps = {
  required: true,
  updateSelectedOption: null,
  wasReset: false,
};
