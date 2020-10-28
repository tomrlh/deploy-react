import React from "react";
import { Routes, Route } from "react-router-dom";
import { CommonNav } from "routes/navigation/comum";
import ClienteHome from "pages/Cliente/Home";
import { ContratoNav } from "routes/navigation/contrato";
import ClienteContratoPage from "pages/Cliente/Contratos";
import ClienteOrdemServicoPage from "pages/Cliente/OrdemServico";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import ItemOSForm from "components/ItemOS/Form";
import { ItemOSNav } from "routes/navigation/itemos";
import ItemOSPage from "pages/Cliente/ItemOS";

export default function ClienteRoutes() {
  return (
    <Routes>
      <Route
        path={CommonNav.HOME + CommonNav.CLIENTE}
        element={<ClienteHome />}
      >
        <Route
          path={ContratoNav.CONSULTAR}
          element={<ClienteContratoPage />}
        ></Route>

        <Route
          path={OrdemServicoNav.CONSULTAR}
          element={<ClienteOrdemServicoPage />}
        ></Route>

        <Route path={`${ItemOSNav.CADASTRAR}`} element={<ItemOSForm />}></Route>

        <Route path={`${ItemOSNav.CONSULTAR}`} element={<ItemOSPage />}></Route>

        <Route
          path={`${ItemOSNav.ATUALIZAR}/:id`}
          element={<ItemOSForm />}
        ></Route>
      </Route>
    </Routes>
  );
}
