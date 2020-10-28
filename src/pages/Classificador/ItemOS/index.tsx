import React, { useState, useEffect, useContext } from "react";
import { Container, Icon, Message, Segment, Table } from "semantic-ui-react";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import OrdemServicoTable from "components/OrdemServico/Table";
import { ContratoContext } from "store/contexts/ContratoContext";
import OrdemServicoProvider, {
  OrdemServicoContext,
} from "store/contexts/OrdemServicoContext";
import { findByClassificador } from "services/requests/ItemOS";
import usePrevious from "services/hooks/usePrevious";
import PageHeader from "components/global/Commons/PageHeader";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";
import ItemOSTable from "components/ItemOS/Table";
import { AuthContext } from "store/contexts/AuthContext";
import { ItemOS, ItemOSFieldsNames } from "services/types/ItemOS";
import { Link } from "react-router-dom";
import { LaudoNav } from "routes/navigation/laudo";
import { ItemOSContext } from "store/contexts/ItemOSContext";

const ItemOSPage = () => {
  const { loggedUser } = useContext(AuthContext);
  const { itensOS, setItensOS } = useContext(ItemOSContext);

  useEffect(() => {
    console.log(loggedUser);
    const buscaItensOSByClassificador = async () => {
      let itens = await findByClassificador(loggedUser.id);
      setItensOS(itens);
    };
    buscaItensOSByClassificador();
  }, [loggedUser]);

  return (
    <Container>
      <ItemOSTable itensOS={itensOS} isClassificadorView />
    </Container>
  );
};

export default ItemOSPage;

const styles = {
  largerCell: {},
};
