import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ContratosTable from "components/Contrato/Table";
import { ContratoFromAPI } from "services/types/Contrato";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import * as Contratos from "services/requests/Contratos/Contratos";
import { CommonNav } from "routes/navigation/comum";
import { OrdemServicoNav } from "routes/navigation/ordemservico";

const ClienteContratoPage = () => {
  const [contratos, setContratos] = useState<Array<ContratoFromAPI>>([]);
  const [paginationControls, setPaginationControls] = useState<Meta>(
    initialMetaState
  );

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
        paginationControls={paginationControls}
        ordemServicoLink={
          CommonNav.HOME + CommonNav.CLIENTE + "/" + OrdemServicoNav.CONSULTAR
        }
      />
    </Container>
  );
};

export default ClienteContratoPage;
