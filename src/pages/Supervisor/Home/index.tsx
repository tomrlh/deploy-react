import React from "react";
import { Outlet } from "react-router-dom";
import OrdemServicoProvider from "store/contexts/OrdemServicoContext";
import { Footer } from "components/global/Footer";
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
