import React from "react";
import { Table } from "semantic-ui-react";
import { Cliente } from "services/types/Cliente";

const DadosEmpresaTabela = (props: { cliente: Cliente }) => (
  <Table basic="very" celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>CNPJ</Table.HeaderCell>
        <Table.HeaderCell>Razão Social</Table.HeaderCell>
        <Table.HeaderCell>Inscrição Estadual</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.cliente.cnpj}</Table.Cell>
        <Table.Cell>{props.cliente.razaoSocial}</Table.Cell>
        <Table.Cell>{props.cliente.inscricaoEstadual}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default DadosEmpresaTabela;
