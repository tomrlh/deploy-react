import LaudoForm from "components/Laudo/Form";
import ClassificadorHome from "pages/Classificador/Home";
import LaudosPage from "pages/Classificador/Laudo";
import ItemOSPage from "pages/Classificador/ItemOS";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";
import { LaudoNav } from "routes/navigation/laudo";

export default function ClassificadorRoutes() {
  return (
    <Routes>
      <Route
        path={CommonNav.HOME + CommonNav.CLASSIFICADOR}
        element={<ClassificadorHome />}
      >
        {/* <Route
          path={`${ItemOSNav.CONSULTAR}`}
          element={<ItemOSTable isClassificadorView={true} />}
        ></Route> */}

        <Route path={`${LaudoNav.CADASTRAR}`} element={<LaudoForm />}></Route>

        <Route path={`${LaudoNav.CONSULTAR}`} element={<LaudosPage />}></Route>
        {/* <Route path={`${LaudoNav.CONSULTAR}`} element={<LaudoTable />}></Route> */}

        <Route path={`${ItemOSNav.CONSULTAR}`} element={<ItemOSPage />}></Route>
        <Route
          path={`${LaudoNav.CONSULTAR}/:id`}
          element={<LaudosPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
