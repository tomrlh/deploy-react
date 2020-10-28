import React from "react";
import { Header, Table } from "semantic-ui-react";
import { ContratoFromAPI } from "services/types/Contrato";

const ContratoDetalhes = (props: { contrato: ContratoFromAPI }) => (
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Header.Content>
              Data de Fechamento
              <Header.Subheader>
                {props.contrato.dataFechamento}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Header as="h4" image>
            <Header.Content>
              Data de Vencimento
              <Header.Subheader>
                {props.contrato.dataVencimento}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Header as="h4" image>
            <Header.Content>
              Periodicidade de Pagamento
              <Header.Subheader>
                {props.contrato.periodicidadePagamento}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Header as="h4" image>
            <Header.Content>
              R$/Ton
              <Header.Subheader>
                {props.contrato.reaisPorTonelada}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Header as="h4" image>
            <Header.Content>
              R$/Ton (OGM)
              <Header.Subheader>
                {props.contrato.reaisPorToneladaOGM}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default ContratoDetalhes;
