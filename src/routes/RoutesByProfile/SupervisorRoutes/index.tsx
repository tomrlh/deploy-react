import OrdemServicoTable from "pages/Supervisor/OrdemServico";
import LaudoForm from "components/Laudo/Form";
import LaudoTable from "components/Laudo/Table";
import ClassificadorHome from "pages/Classificador/Home";
import SupervisorHome from "pages/Supervisor/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";
import { LaudoNav } from "routes/navigation/laudo";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import ItemOSPage from "pages/Supervisor/ItemOS";
import LaudosPage from "pages/Supervisor/Laudo";

export default function SupervisorRoutes() {
  return (
    <Routes>
      <Route
        path={CommonNav.HOME + CommonNav.SUPERVISOR_BASE}
        element={<SupervisorHome />}
      >
        <Route
          path={`${OrdemServicoNav.CONSULTAR}`}
          element={<OrdemServicoTable />}
        ></Route>

        <Route path={`${ItemOSNav.CONSULTAR}`} element={<ItemOSPage />}></Route>

        <Route path={`${LaudoNav.CONSULTAR}`} element={<LaudosPage />}></Route>
      </Route>
    </Routes>
  );
}
