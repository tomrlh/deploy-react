import React, { useState, useEffect, createContext } from "react";
import { ContratoFromAPI } from "services/types/Contrato";

interface ContratoContextData {
  caceta2: string;
  selectedContrato: ContratoFromAPI;
  setSelectedContrato: Function;
}

export const ContratoContext = createContext<ContratoContextData>(
  {} as ContratoContextData
);

const ContratoProvider = (props: { children: React.ReactNode }) => {
  const [selectedContrato, setObjectSelectedContrato] = useState<
    ContratoFromAPI
  >({} as ContratoFromAPI);

  // saves in the localStorage
  const setSelectedContrato = (contrato: ContratoFromAPI) => {
    setObjectSelectedContrato(contrato);
    localStorage.setItem("selectedContrato", JSON.stringify(contrato));
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedSelectedContrato = localStorage.getItem("selectedContrato");
      if (storagedSelectedContrato) {
        setObjectSelectedContrato(JSON.parse(storagedSelectedContrato));
      }
    };
    loadStoragedData();
  }, []);

  let caceta2 = "testse";

  return (
    <ContratoContext.Provider
      value={{ caceta2, selectedContrato, setSelectedContrato }}
    >
      {props.children}
    </ContratoContext.Provider>
  );
};

export default ContratoProvider;
