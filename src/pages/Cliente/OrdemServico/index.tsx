import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import OrdemServicoTable from "components/OrdemServico/Table";
import OrdemServicoForm from "components/OrdemServico/Form";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { getOSByCliente } from "components/OrdemServico/functions";
import usePrevious from "services/hooks/usePrevious";
import { ItemOSNav } from "routes/navigation/itemos";
import { CommonNav } from "routes/navigation/comum";
import { AuthContext } from "store/contexts/AuthContext";
import { OrdemServico } from "services/types/OrdemServico";

const ClienteOrdemServicoPage = () => {
  const { loggedUser } = useContext(AuthContext);
  const { ordensServico, setOrdensServico: setOrdensServicoAndLS } = useContext(
    OrdemServicoContext
  );
  const [paginationControls] = useState<Meta>(initialMetaState);
  const [prevOrdensServico, setPrevOrdensServico] = useState<OrdemServico[]>(
    (usePrevious(ordensServico) as unknown) as OrdemServico[]
  );

  const loadOSs = async () => {
    if (prevOrdensServico !== ordensServico) {
      const newOrdensServico = await getOSByCliente(loggedUser);
      setOrdensServicoAndLS(newOrdensServico);
      setPrevOrdensServico(ordensServico);
      console.log(newOrdensServico);
    }
  };

  useEffect(
    /*eslint-disable */
    () => {
      loadOSs();

      // console.log("AAAAAAA", prevOrdensServico, ordensServico);
      // if (!ordensServico || ordensServico.length == 0 || ordensServico == []) {
      //   console.log("AA");
      //   const newOrdensServico = getOSByCliente(loggedUser);
      //   setOrdensServicoAndLS(newOrdensServico);
      //   setFirstFetch(true);
      // } else {
      //   console.log("BB", ordensServico);
      //   setOrdensServicoAndLS(ordensServico);
      // }
    },
    [
      // selectedContrato,
      //== ordensServico,
      // setOrdensServicoAndLS,
      // prevOrdensServico,
    ]
  );

  return (
    <Container>
      <OrdemServicoForm />
      <OrdemServicoTable
        ordensServico={ordensServico}
        isClienteView={true}
        paginationControls={paginationControls}
        itensOSLink={`${CommonNav.HOME}${CommonNav.CLIENTE}/${ItemOSNav.CONSULTAR}`}
      />
    </Container>
  );
};

export default ClienteOrdemServicoPage;
