import React from "react";
import { Outlet } from "react-router-dom";
import ContratoProvider from "store/contexts/ContratoContext";
import OrdemServicoProvider from "store/contexts/OrdemServicoContext";
import RegiaoProvider from "store/contexts/RegiaoContext";
import ClienteFormProvider from "store/contexts/ClienteFormContext";
import NavbarCliente from "components/global/Navbar/Cliente";
import ItemOSProvider from "store/contexts/ItemOSContext";
import LaudoProvider from "store/contexts/LaudoContext";
import { Footer } from "components/global/Footer";

export default function ClienteHome() {
  //const classes = useStyles();

  return (
    <>
      <NavbarCliente />

      <ContratoProvider>
        <ClienteFormProvider>
          <OrdemServicoProvider>
            <ItemOSProvider>
              <LaudoProvider>
                <RegiaoProvider>
                  <Outlet />
                </RegiaoProvider>
              </LaudoProvider>
            </ItemOSProvider>
          </OrdemServicoProvider>
        </ClienteFormProvider>
      </ContratoProvider>

      <Footer />
    </>
  );
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       marginTop: "90px",
//     },
//   })
// );
