import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ContratosTable from "components/Contrato/Table";
import { ContratoFromAPI } from "services/types/Contrato";
import * as Contratos from "services/requests/Contratos/Contratos";
import { CommonNav } from "routes/navigation/comum";
import { OrdemServicoNav } from "routes/navigation/ordemservico";

const ClienteContratoPage = () => {
  const [contratos, setContratos] = useState<Array<ContratoFromAPI>>([]);

  useEffect(() => {
    const getContratosByCliente = async () => {
      let contratosPaginated: ContratoFromAPI[] = await Contratos.getByUsuario();
      console.log("contratos carregados", contratosPaginated);
      setContratos(contratosPaginated);
      // setContratos(contratosPaginated.data);
      // setPaginationControls(contratosPaginated.meta);
    };
    getContratosByCliente();
  }, []);

  return (
    <Container>
      <ContratosTable
        contratos={contratos}
        ordemServicoLink={
          CommonNav.HOME + CommonNav.CLIENTE + "/" + OrdemServicoNav.CONSULTAR
        }
      />
    </Container>
  );
};

export default ClienteContratoPage;
