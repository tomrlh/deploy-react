import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { ItemOSContext } from "store/contexts/ItemOSContext";
import ItemOSTable from "components/ItemOS/Table";

const ItemOSPage = () => {
  const { itensOS, setItensOS } = useContext(ItemOSContext);

  useEffect(() => {
    /*eslint-disable */
    setItensOS(itensOS);
  }, [itensOS]);

  return (
    <Container>
      <ItemOSTable itensOS={itensOS} />
    </Container>
  );
};

export default ItemOSPage;
