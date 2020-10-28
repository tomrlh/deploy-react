import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import ClientesTable from "components/Cliente/Table";
import { Cliente } from "services/types/Cliente";
import { Meta, initialMetaState } from "services/types/Adonis/Meta";
import * as Clientes from "services/requests/Clientes/Clientes";
import { Pagination } from "services/types/Adonis/Pagination";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";

const TableExampleColumnCount = () => {
  const { clientes, setClientes } = useContext(ClienteFormContext);
  const [paginationControls, setPaginationControls] = useState<Meta>(
    initialMetaState
  );

  useEffect(() => {
    const getClientes = async () => {
      let clientes: Cliente[] = await Clientes.get();
      clientes = await Clientes.get();
      console.log("CLIENTES", clientes);

      setClientes([]);
      setClientes([{}]);
      setClientes([...clientes]);
    };
    getClientes();
  }, []);

  return (
    <Container>
      <ClientesTable
        clientes={clientes}
        paginationControls={paginationControls}
      />
    </Container>
  );
};

export default TableExampleColumnCount;
