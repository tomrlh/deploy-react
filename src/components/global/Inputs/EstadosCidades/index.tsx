import React, { useState, useEffect } from "react";
import { get } from "services/requests/Estados";
import { getByEstado } from "services/requests/Cidades";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";
import { Dropdown } from "semantic-ui-react";

type Opcoes = {
  id: string;
  valor: any;
  nome: string;
};

export interface Props {
  nomeEstado: string;
  nomeEstadoExibido: string;
  nomeCidade: string;
  nomeCidadeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  register: Function;
  wasReset: boolean;
  isMultipleEstados: boolean;
  isMultipleCidades: boolean;
  updateSelectedOption: Function;
  required: boolean;
}

type Estado = {
  id: string;
  nome: string;
};

type Cidade = {
  id: string;
  nome: string;
};

export default function EstadosCidades(props: Props) {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [cidadesSelected, setCidadesSelected] = useState<string[]>([]);

  const handleChangeEstado = async (e: any, data: any) => {
    let newCidades = await getCidadesByEstado(data.value);
    setCidades(newCidades);
  };

  const handleChangeCidade = async (e: any, data: any) => {
    console.log(data.value);
    setCidadesSelected(data.value);

    if (props.setValue) props.setValue(props.nomeCidade, data.value);
    if (props.updateSelectedOption) {
      props.updateSelectedOption(data.value);
    }
  };

  const getEstados = async () => {
    let newEstados = await get();
    setEstados(newEstados);
  };
  const getEstadosFormatted = () => {
    return estados.map((estado) => {
      return {
        key: estado.id,
        value: estado.id,
        text: estado.nome,
      };
    });
  };

  const getCidadesByEstado = async (id: string) => {
    let newCidades = await getByEstado(id);
    return newCidades;
  };
  const getCidadesFormatted = () => {
    return cidades.map((cidade) => {
      return {
        key: cidade.id,
        value: cidade.id,
        text: cidade.nome,
      };
    });
  };

  useEffect(() => {
    getEstados();
    if (props.required) {
      props.register({ name: props.nomeCidade }, { required: true });
      // can be set direct in the Dropdown component
    }
    if (props.wasReset) {
      setCidadesSelected([]);
    }
  }, [props, props.wasReset]);

  return (
    <div>
      <Dropdown
        placeholder="Estado"
        name="estadoSelector"
        selection
        fluid
        options={getEstadosFormatted()}
        onChange={handleChangeEstado}
      />

      <span style={{ marginRight: "5px" }}> </span>

      <Dropdown
        placeholder="Cidade(s)"
        selection
        fluid
        multiple={props.isMultipleCidades}
        value={cidadesSelected}
        name="cidadeSelector"
        error={
          props.errors && props.errors[props.nomeCidade]
            ? props.errors[props.nomeCidade]
            : false
        }
        options={getCidadesFormatted()}
        onChange={handleChangeCidade}
      />
    </div>
  );
}

EstadosCidades.defaultProps = {
  nomeEstado: "",
  nomeEstadoExibido: "",
  nomeCidade: "",
  nomeCidadeExibido: "",
  errors: null,
  setValue: null,
  register: null,
  wasReset: false,
  isMultipleEstados: false,
  isMultipleCidades: false,
  updateSelectedOption: null,
  required: true,
};
