import React, { useState, useEffect, createContext } from "react";
import { ItemOS } from "services/types/ItemOS";
import { getArrayFromLocalStorage } from "utils";

interface ItemOSContextData {
  itensOS: ItemOS[];
  setItensOS: Function;
  selectedItemOS: ItemOS;
  setSelectedItemOS: Function;
}

export const ItemOSContext = createContext<ItemOSContextData>(
  {} as ItemOSContextData
);

const ItemOSProvider = (props: { children: React.ReactNode }) => {
  const [itensOS, setObjectItensOS] = useState<ItemOS[]>(
    getArrayFromLocalStorage("itensOS") as ItemOS[]
  );
  const [selectedItemOS, setObjectSelectedItemOS] = useState<ItemOS>(
    {} as ItemOS
  );

  // saves in the localStorage
  const setItensOS = (newItensOS: ItemOS[]) => {
    setObjectItensOS(newItensOS);
    localStorage.setItem("itensOS", JSON.stringify(newItensOS));
  };

  const setSelectedItemOS = (itemOS: ItemOS) => {
    setObjectSelectedItemOS(itemOS);
    localStorage.setItem("selectedItemOS", JSON.stringify(itemOS));
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedItensOS = localStorage.getItem("itensOS");
      const storagedSelectedItemOS = localStorage.getItem("selectedItemOS");
      console.log("stored", storagedItensOS, storagedSelectedItemOS);
      if (
        storagedItensOS &&
        storagedItensOS !== "undefined" &&
        storagedItensOS !== "{}"
      ) {
        setObjectItensOS(JSON.parse(storagedItensOS));
      }

      if (storagedSelectedItemOS) {
        setObjectSelectedItemOS(JSON.parse(storagedSelectedItemOS));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <ItemOSContext.Provider
      value={{
        itensOS,
        setItensOS,
        selectedItemOS,
        setSelectedItemOS,
      }}
    >
      {props.children}
    </ItemOSContext.Provider>
  );
};

export default ItemOSProvider;
