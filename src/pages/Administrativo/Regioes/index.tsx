import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import RegioesTable from "components/Regiao/List";
import { Regiao } from "services/types/Regiao";
import * as Regioes from "services/requests/Regioes";
import { RegiaoContext } from "store/contexts/RegiaoContext";
import RegiaoProvider from "store/contexts/RegiaoContext";

const RegioesTablePage = () => {
  const { regioes, setRegioes } = useContext(RegiaoContext);

  useEffect(() => {
    /*eslint-disable */
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
        <RegioesTable regioes={regioes} />
      </Container>
    </RegiaoProvider>
  );
};

export default RegioesTablePage;
