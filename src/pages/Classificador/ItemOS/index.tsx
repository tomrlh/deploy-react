import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { findByClassificador } from "services/requests/ItemOS";
import ItemOSTable from "components/ItemOS/Table";
import { AuthContext } from "store/contexts/AuthContext";
import { ItemOSContext } from "store/contexts/ItemOSContext";

const ItemOSPage = () => {
  const { loggedUser } = useContext(AuthContext);
  const { itensOS, setItensOS } = useContext(ItemOSContext);

  useEffect(() => {
    /*eslint-disable */
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
