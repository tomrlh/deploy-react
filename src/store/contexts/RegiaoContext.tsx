import React, { useState, useEffect, createContext } from "react";
import { Regiao } from "services/types/Regiao";

interface RegiaoContextData {
  regioes: Regiao[];
  setRegioes: Function;
}

export const RegiaoContext = createContext<RegiaoContextData>(
  {} as RegiaoContextData
);

const ContratoProvider = (props: { children: React.ReactNode }) => {
  const [regioes, setSelectedRegioes] = useState<Regiao[]>({} as Regiao[]);

  // saves in the localStorage
  const setRegioes = (regioes: Regiao[]) => {
    setSelectedRegioes(regioes);
    localStorage.setItem("regioes", JSON.stringify(regioes));
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedRegioes = localStorage.getItem("regioes");
      if (storagedRegioes) {
        setSelectedRegioes(JSON.parse(storagedRegioes));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <RegiaoContext.Provider value={{ regioes, setRegioes }}>
      {props.children}
    </RegiaoContext.Provider>
  );
};

export default ContratoProvider;
