import React from "react";
import { Container } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import NavbarCliente from "components/global/Navbar/";
import ContratoProvider from "store/contexts/ContratoContext";
import OrdemServicoProvider from "store/contexts/OrdemServicoContext";
import RegiaoProvider from "store/contexts/RegiaoContext";
import ClienteFormProvider from "store/contexts/ClienteFormContext";
import NavbarAdministrativo from "components/global/Navbar/Administrativo";
import { Footer } from "components/global/Footer";
import jsPDF from "jspdf";
import ItemOSProvider, { ItemOSContext } from "store/contexts/ItemOSContext";
import LaudoProvider from "store/contexts/LaudoContext";

export default function ClienteHome() {
  //const classNamees = useStyles();

  return (
    <>
      <NavbarAdministrativo />

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

      {/* <button onClick={jsPDFGenerator}>Teste</button> */}
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
