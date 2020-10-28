import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import RegioesTable from "components/Regiao/List";
import { Regiao } from "services/types/Regiao";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import * as Regioes from "services/requests/Regioes";
import { Pagination } from "services/types/Adonis/Pagination";
import { RegiaoContext } from "store/contexts/RegiaoContext";
import RegiaoProvider from "store/contexts/RegiaoContext";

const RegioesTablePage = () => {
  const { regioes, setRegioes } = useContext(RegiaoContext);
  //const [regioes, setRegioes] = useState<Array<Regiao>>([]);
  const [paginationControls, setPaginationControls] = useState<Meta>(
    initialMetaState
  );

  useEffect(() => {
    const getRegioes = async () => {
      let newRegioes: Regiao[] = await Regioes.get();
      console.log(newRegioes);
      setRegioes(newRegioes);
    };
    getRegioes();
  }, []);

  return (
    <RegiaoProvider>
      <Container>
        <RegioesTable
          regioes={regioes}
          paginationControls={paginationControls}
        />
      </Container>
    </RegiaoProvider>
  );
};

export default RegioesTablePage;
