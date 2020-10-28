import React, { useState, useEffect, createContext } from "react";
import { Laudo } from "services/types/Laudo";

interface LaudoContextData {
  laudos: Laudo[];
  setLaudos: Function;
  removeLaudo: Function;
  selectedLaudo: Laudo;
  setSelectedLaudo: Function;
}

export const LaudoContext = createContext<LaudoContextData>(
  {} as LaudoContextData
);

const LaudoProvider = (props: { children: React.ReactNode }) => {
  const [laudos, setObjectItens] = useState<Laudo[]>({} as Laudo[]);
  const [selectedLaudo, setObjectSelectedLaudo] = useState<Laudo>({} as Laudo);

  // saves in the localStorage
  const setLaudos = (newItens: Laudo[]) => {
    setObjectItens(newItens);
    localStorage.setItem("laudos", JSON.stringify(newItens));
  };

  const removeLaudo = (id: number) => {
    const updatedLaudos = laudos.filter((laudo) => laudo.id !== id);
    setLaudos([]);
    setLaudos(updatedLaudos);
    console.log("UPDATED", updatedLaudos.length);
    console.log("OLD", laudos.length);
  };

  const setSelectedLaudo = (item: Laudo) => {
    setObjectSelectedLaudo(item);
    localStorage.setItem("selectedLaudo", JSON.stringify(item));
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedLaudos = localStorage.getItem("laudos");
      // const storagedSelectedLaudo = localStorage.getItem("selectedLaudo");

      // if (storagedLaudos && storagedLaudos !== "undefined") {
      if (storagedLaudos) {
        console.log(typeof storagedLaudos, storagedLaudos);
        setObjectItens(JSON.parse(storagedLaudos));
      }

      // if (storagedSelectedLaudo) {
      //   setObjectSelectedLaudo(JSON.parse(storagedSelectedLaudo));
      // }
    };
    loadStoragedData();
  }, []);

  return (
    <LaudoContext.Provider
      value={{
        laudos,
        setLaudos,
        removeLaudo,
        selectedLaudo,
        setSelectedLaudo,
      }}
    >
      {props.children}
    </LaudoContext.Provider>
  );
};

export default LaudoProvider;
