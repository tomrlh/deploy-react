import React from "react";
import { Container } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import NavbarCliente from "components/global/Navbar/";
import ContratoProvider from "store/contexts/ContratoContext";
import OrdemServicoProvider from "store/contexts/OrdemServicoContext";
import RegiaoProvider from "store/contexts/RegiaoContext";
import ClienteFormProvider from "store/contexts/ClienteFormContext";
import { Footer } from "components/global/Footer";
import NavbarClassificador from "components/global/Navbar/Classificador";
import NavbarSupervisor from "components/global/Navbar/Supervisor";
import ItemOSProvider from "store/contexts/ItemOSContext";
import LaudoProvider from "store/contexts/LaudoContext";

export default function SupervisorHome() {
  //const classes = useStyles();

  return (
    <>
      <NavbarSupervisor />

      <OrdemServicoProvider>
        <ItemOSProvider>
          <LaudoProvider>
            <Outlet />
          </LaudoProvider>
        </ItemOSProvider>
      </OrdemServicoProvider>

      <Footer />
    </>
  );
}
