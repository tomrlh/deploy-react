import React from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import { Cliente } from "services/types/Cliente";

const GestoresClienteTable = (props: { cliente: Cliente }) => (
  <Table basic="very" celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Representantes</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Telefone</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="user" />
            <Header.Content>
              {props.cliente.gestorContratoNome}
              <Header.Subheader>Gestor do Contrato</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{props.cliente.gestorContratoEmail}</Table.Cell>
        <Table.Cell>{props.cliente.gestorContratoTelefone}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default GestoresClienteTable;
