import React, { useEffect, useState } from "react";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";
import { get } from "services/requests/Estados";

type Estado = {
  id: string;
  nome: string;
};

export interface Props {
  nomeEstado: string;
  nomeEstadoExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  register: Function;
  wasReset: boolean;
}

export default function Estados(props: Props) {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  const getEstados = async () => {
    let newEstados = await get();
    setEstados(newEstados);
  };

  useEffect(() => {
    getEstados();
  }, []);

  return (
    <div>
      <div
        className={!props.errors[props.nomeEstado] ? "field" : "error field"}
      >
        <label>{props.nomeEstadoExibido}</label>

        <select
          className="field"
          name={props.nomeEstado}
          value={estadoSelecionado}
          onChange={(e) => {
            setEstadoSelecionado(e.target.value);
            console.log("will set", Number(e.target.value));
            props.setValue(props.nomeEstado, Number(e.target.value));
          }}
          ref={props.register({
            required: true,
          })}
        >
          <option value="" className="item">
            Selecione o {props.nomeEstadoExibido}
          </option>

          {estados.length > 0 ? (
            <>
              {estados.map((opcao, index) => (
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
            <>Sem estados cadastrados</>
          )}
        </select>
      </div>
    </div>
  );
}
