import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import ClientesTable from "components/Cliente/Table";
import { Cliente } from "services/types/Cliente";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import * as Clientes from "services/requests/Clientes/Clientes";
import { Pagination } from "services/types/Adonis/Pagination";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";
import ContasReceberTable from "components/ContasReceber/Table";

const ContasReceberPage = () => {
  return (
    <Container>
      <ContasReceberTable />
    </Container>
  );
};

export default ContasReceberPage;
