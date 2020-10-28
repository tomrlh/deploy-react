import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import ClientesTable from "components/Cliente/Table";
import { Cliente } from "services/types/Cliente";
import * as Clientes from "services/requests/Clientes/Clientes";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";

const TableExampleColumnCount = () => {
  const { clientes, setClientes } = useContext(ClienteFormContext);

  useEffect(() => {
    /*eslint-disable */
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
      <ClientesTable clientes={clientes} />
    </Container>
  );
};

export default TableExampleColumnCount;
