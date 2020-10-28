import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ContratosTable from "components/Contrato/Table";
import { ContratoFromAPI } from "services/types/Contrato";
import * as Contratos from "services/requests/Contratos/Contratos";
import { CommonNav } from "routes/navigation/comum";
import { OrdemServicoNav } from "routes/navigation/ordemservico";

const AdminContratoPage = () => {
  const [contratos, setContratos] = useState<Array<ContratoFromAPI>>([]);

  useEffect(() => {
    const getContratos = async () => {
      let contratosPaginated: ContratoFromAPI[] = await Contratos.get();
      console.log("contratos carregados", contratosPaginated);
      setContratos(contratosPaginated);
      // setContratos(contratosPaginated.data);
      // setPaginationControls(contratosPaginated.meta);
    };
    getContratos();
  }, []);

  return (
    <Container>
      <ContratosTable
        contratos={contratos}
        ordemServicoLink={`${CommonNav.HOME}${CommonNav.ADMIN}/${OrdemServicoNav.CONSULTAR}`}
      />
    </Container>
  );
};

export default AdminContratoPage;
