import React, { useState, SyntheticEvent, useEffect } from "react";
import {
  Dropdown,
  DropdownProps,
  DropdownOnSearchChangeData,
} from "semantic-ui-react";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";
import { Cliente } from "services/types/Cliente";
import { property } from "lodash";

export type Option = {
  key: string;
  value: string;
  text: string;
};

type Props = {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  options: Array<Option>;
  required: boolean;
};

export default function ValidableSelectWithSearch(props: Props) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Array<Option>>([]);

  const handleChange = (
    e: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setSearchQuery(searchQuery);
    setValue(data.value as string);
  };

  const handleSearchChange = (
    e: SyntheticEvent<HTMLElement, Event>,
    data: DropdownOnSearchChangeData
  ) => {
    let newFilteredOptions = props.options.filter((option) =>
      option.text.includes(data.searchQuery)
    );
    setSearchQuery(data.searchQuery);
    setFilteredOptions(newFilteredOptions);
    console.log(newFilteredOptions);
  };

  // sendo usado no componente pai, pois já deve estar formatado ao chegar
  const formatClientes = (clientesToFormat: Cliente[]) => {
    let newClientesFormatados = clientesToFormat.map((cliente) => {
      return {
        key: cliente.id.toString(),
        value: cliente.id.toString(),
        text: cliente.razaoSocial,
      };
    });
    return newClientesFormatados;
  };

  useEffect(() => {
    if (!isRegistered) {
      props.register({ name: props.nomeCampo }, { required: props.required });
      setIsRegistered(true);
      setFilteredOptions(props.options);
    } else {
      if (filteredOptions && filteredOptions.length > 0) {
        setFilteredOptions(filteredOptions);
      }
    }
  }, [filteredOptions]);

  return (
    <div className={!props.errors[props.nomeCampo] ? "field" : "error field"}>
      <label>
        {props.nomeExibido} | {filteredOptions.length}
      </label>
      <Dropdown
        name={props.nomeCampo}
        fluid
        onChange={handleChange}
        onSearchChange={handleSearchChange}
        options={filteredOptions}
        placeholder={props.nomeCampo + "..."}
        // search={() => true}
        searchQuery={searchQuery}
        selection
        value={value}
      />
    </div>
  );
}

ValidableSelectWithSearch.defaultProps = {
  required: true,
};
