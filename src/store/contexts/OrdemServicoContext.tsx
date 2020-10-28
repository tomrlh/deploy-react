import React, { useState, useEffect, createContext } from "react";
import { OrdemServico } from "services/types/OrdemServico";
import { Usuario } from "services/types/Usuario";
import { getArrayFromLocalStorage } from "utils";

interface OrdemServicoContextData {
  ordensServico: OrdemServico[];
  setOrdensServico: Function;
  selectedOrdemServico: OrdemServico;
  setSelectedOrdemServico: Function;
  loadedClassificadores: Usuario[];
  setLoadedClassificadores: Function;
}

export const OrdemServicoContext = createContext<OrdemServicoContextData>(
  {} as OrdemServicoContextData
);

const OrdemServicoProvider = (props: { children: React.ReactNode }) => {
  const [ordensServico, setObjectOrdensServico] = useState<OrdemServico[]>(
    getArrayFromLocalStorage("ordensServico") as OrdemServico[]
  );
  const [selectedOrdemServico, setObjectSelectedOrdemServico] = useState<
    OrdemServico
  >({} as OrdemServico);
  const [loadedClassificadores, setObjectLoadedClassificadores] = useState<
    Usuario[]
  >([] as Usuario[]);

  // saves in the localStorage
  const setOrdensServico = (newOrdensServico: OrdemServico[]) => {
    setObjectOrdensServico(newOrdensServico);
    localStorage.setItem("ordensServico", JSON.stringify(newOrdensServico));
  };

  const setSelectedOrdemServico = (ordemServico: OrdemServico) => {
    setObjectSelectedOrdemServico(ordemServico);
    localStorage.setItem("selectedOrdemServico", JSON.stringify(ordemServico));
  };

  const setLoadedClassificadores = (classificadores: Usuario[]) => {
    setObjectLoadedClassificadores(classificadores);
    localStorage.setItem(
      "loadedClassificadores",
      JSON.stringify(classificadores)
    );
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedOrdensServico = localStorage.getItem("ordensServico");
      const storagedSelectedOrdemServico = localStorage.getItem(
        "selectedOrdemServico"
      );
      if (storagedOrdensServico) {
        setObjectOrdensServico(JSON.parse(storagedOrdensServico));
      }

      if (storagedSelectedOrdemServico) {
        setObjectSelectedOrdemServico(JSON.parse(storagedSelectedOrdemServico));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <OrdemServicoContext.Provider
      value={{
        ordensServico,
        setOrdensServico,
        selectedOrdemServico,
        setSelectedOrdemServico,
        loadedClassificadores,
        setLoadedClassificadores,
      }}
    >
      {props.children}
    </OrdemServicoContext.Provider>
  );
};

export default OrdemServicoProvider;
