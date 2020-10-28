import React from "react";
import { Routes, Route } from "react-router-dom";
import { CommonNav } from "routes/navigation/comum";
import AdminHome from "pages/Administrativo/Home";
import { ContratoNav } from "routes/navigation/contrato";
import AdminOrdemServicoPage from "pages/Administrativo/OrdemServico";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import ItemOSForm from "components/ItemOS/Form";
import { ItemOSNav } from "routes/navigation/itemos";
import { ClienteNav } from "routes/navigation/cliente";
import { RegiaoNav } from "routes/navigation/regiao";
import ClientePage from "pages/Administrativo/Clientes";
import ClienteForm from "components/Cliente/Form";
import ContratoPage from "pages/Administrativo/Contratos";
import ContratoForm from "components/Contrato/Form";
import UsuarioPage from "pages/Administrativo/Usuarios";
import UsuarioForm from "components/Usuario/Form";
import { UsuarioNav } from "routes/navigation/usuario";
import RegioesTablePage from "pages/Administrativo/Regioes";
import { LaudoNav } from "routes/navigation/laudo";
import ItemOSPage from "pages/Administrativo/ItemOS";
import LaudosPage from "pages/Administrativo/Laudo";
import ContasReceberPage from "pages/Administrativo/ContasReceber";
import { PontoEmbarqueNav } from "routes/navigation/ponto-embarque";
import PontosEmbarquePage from "pages/Administrativo/PontosEmbarquePage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path={CommonNav.HOME + CommonNav.ADMIN} element={<AdminHome />}>
        {/* CONTRATOS */}
        <Route path={ContratoNav.CONSULTAR} element={<ContratoPage />}></Route>
        <Route path={ContratoNav.CADASTRAR} element={<ContratoForm />}></Route>

        {/* CLIENTES */}
        <Route path={ClienteNav.CONSULTAR} element={<ClientePage />}></Route>
        <Route path={ClienteNav.CADASTRAR} element={<ClienteForm />}></Route>
        <Route
          path={`${ClienteNav.EDITAR}/:id`}
          element={<ClienteForm />}
        ></Route>

        {/* USUÁRIOS */}
        <Route path={UsuarioNav.CONSULTAR} element={<UsuarioPage />}></Route>
        <Route path={UsuarioNav.CADASTRAR} element={<UsuarioForm />}></Route>
        <Route
          path={`${UsuarioNav.EDITAR}/:id`}
          element={<UsuarioForm />}
        ></Route>

        {/* ORDEM SERVIÇO */}
        <Route
          path={OrdemServicoNav.CONSULTAR}
          element={<AdminOrdemServicoPage />}
        ></Route>

        {/* ITENS OS */}
        <Route path={`${ItemOSNav.CADASTRAR}`} element={<ItemOSForm />}></Route>
        <Route path={`${ItemOSNav.CONSULTAR}`} element={<ItemOSPage />}></Route>
        <Route path={`${LaudoNav.CONSULTAR}`} element={<LaudosPage />}></Route>

        {/* REGIÕES */}
        <Route
          path={`${RegiaoNav.CONSULTAR}`}
          element={<RegioesTablePage />}
        ></Route>

        {/* PONTOS DE EMBARQUE */}
        <Route
          path={PontoEmbarqueNav.CONSULTAR}
          element={<PontosEmbarquePage />}
        ></Route>

        {/* CONTAS À RECEBER */}
        <Route path={`contas-receber`} element={<ContasReceberPage />}></Route>
      </Route>
    </Routes>
  );
}
