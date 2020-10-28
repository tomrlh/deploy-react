import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import OrdemServicoTable from "components/OrdemServico/Table";
import { ContratoContext } from "store/contexts/ContratoContext";
import OrdemServicoProvider, {
  OrdemServicoContext,
} from "store/contexts/OrdemServicoContext";
import { getOSBySelectedContrato } from "components/OrdemServico/functions";
import usePrevious from "services/hooks/usePrevious";
import PageHeader from "components/global/Commons/PageHeader";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";

const ClienteOrdemServicoPage = () => {
  const { selectedContrato } = useContext(ContratoContext);
  const { ordensServico, setOrdensServico: setOrdensServicoAndLS } = useContext(
    OrdemServicoContext
  );
  const [paginationControls] = useState<Meta>(initialMetaState);
  const prevOrdensServico = usePrevious(ordensServico);

  useEffect(() => {
    getOSBySelectedContrato(
      selectedContrato,
      prevOrdensServico,
      setOrdensServicoAndLS
    );
  }, [
    ordensServico,
    prevOrdensServico,
    selectedContrato,
    setOrdensServicoAndLS,
  ]);

  return (
    <Container>
      <OrdemServicoTable
        ordensServico={ordensServico}
        paginationControls={paginationControls}
        isAdministradorView={true}
        itensOSLink={`${CommonNav.HOME}${CommonNav.ADMIN}/${ItemOSNav.CONSULTAR}`}
      />
    </Container>
  );
};

export default ClienteOrdemServicoPage;
