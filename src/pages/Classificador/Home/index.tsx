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
import ItemOSProvider from "store/contexts/ItemOSContext";
import LaudoProvider from "store/contexts/LaudoContext";

export default function ClassificadorHome() {
  //const classes = useStyles();

  return (
    <>
      <NavbarClassificador />

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
