import React, { useState, createContext, useEffect } from "react";
import { Cliente } from "services/types/Cliente";
import { ResponsavelCliente } from "services/types/ResponsavelCliente";

interface ClienteFormContextData {
  clientes: Cliente[];
  setClientes: Function;
  responsaveisCliente: ResponsavelCliente[];
  setResponsaveisCliente: Function;
}

export const ClienteFormContext = createContext<ClienteFormContextData>(
  {} as ClienteFormContextData
);

const ClienteFormProvider = (props: { children: React.ReactNode }) => {
  const [clientes, setObjectClientes] = useState<Cliente[]>([{}] as Cliente[]);
  const [responsaveisCliente, setObjectResponsaveisCliente] = useState<
    ResponsavelCliente[]
  >([] as ResponsavelCliente[]);

  // saves in the localStorage
  const setClientes = (newClientes: Cliente[]) => {
    setObjectClientes(newClientes);
    localStorage.setItem("clientes", JSON.stringify(newClientes));
  };

  const setResponsaveisCliente = (
    newResponsaveisCliente: ResponsavelCliente[]
  ) => {
    setObjectResponsaveisCliente(newResponsaveisCliente);
    localStorage.setItem(
      "responsaveisCliente",
      JSON.stringify(newResponsaveisCliente)
    );
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedResponsaveisCliente = localStorage.getItem(
        "responsaveisCliente"
      );
      if (storagedResponsaveisCliente) {
        setObjectResponsaveisCliente(JSON.parse(storagedResponsaveisCliente));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <ClienteFormContext.Provider
      value={{
        clientes,
        setClientes,
        responsaveisCliente,
        setResponsaveisCliente,
      }}
    >
      {props.children}
    </ClienteFormContext.Provider>
  );
};

export default ClienteFormProvider;
