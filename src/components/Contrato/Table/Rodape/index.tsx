import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Meta } from "services/types/Adonis/Meta";
import { createArrayFromNumber } from "utils";

export type Props = {
  paginationControls: Meta;
};

const RodapeTabela = (props: Props) => {
  let { paginationControls } = props;
  let totalNumber = createArrayFromNumber(paginationControls.total);
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="12">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            {totalNumber.map((pageNumber) => (
              <Menu.Item key={pageNumber} as="a" icon>
                {pageNumber + 1}
              </Menu.Item>
            ))}

            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};

export default RodapeTabela;
