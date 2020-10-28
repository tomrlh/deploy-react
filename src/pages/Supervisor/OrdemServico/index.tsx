import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import OrdemServicoTable from "components/OrdemServico/Table";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { getOSBySupervisorOnly } from "components/OrdemServico/functions";
import usePrevious from "services/hooks/usePrevious";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";
import { AuthContext } from "store/contexts/AuthContext";

const ClienteOrdemServicoPage = () => {
  const { loggedUser } = useContext(AuthContext);
  const { ordensServico, setOrdensServico: setOrdensServicoAndLS } = useContext(
    OrdemServicoContext
  );
  const [paginationControls] = useState<Meta>(initialMetaState);
  const prevOrdensServico = usePrevious(ordensServico);

  useEffect(() => {
    getOSBySupervisorOnly(
      loggedUser.id,
      prevOrdensServico,
      setOrdensServicoAndLS
    );
    setOrdensServicoAndLS(ordensServico);
  }, [ordensServico, prevOrdensServico, loggedUser, setOrdensServicoAndLS]);

  return (
    <Container>
      <OrdemServicoTable
        ordensServico={ordensServico}
        paginationControls={paginationControls}
        itensOSLink={`${CommonNav.HOME}${CommonNav.SUPERVISOR_BASE}/${ItemOSNav.CONSULTAR}`}
      />
    </Container>
  );
};

export default ClienteOrdemServicoPage;
