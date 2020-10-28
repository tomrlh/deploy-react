import React from "react";
import { Image, Message, Segment, Table } from "semantic-ui-react";
import { Cliente } from "services/types/Cliente";
import { Meta } from "services/types/Adonis/Meta";
import RodapeTabela from "./Rodape";
import DetalhesModal from "./Actions/DetalhesModal";
import PageHeader from "components/global/Commons/PageHeader";
import AtualizarModal from "./Actions/AtualizarModal";
import { ClienteFieldsNames } from "services/types/Cliente";

type Props = {
  clientes: Array<Cliente>;
  paginationControls: Meta;
};

const ClientesTable = (props: Props) => {
  return (
    <div>
      <PageHeader
        iconPath="/icons/customer/customer-128px.png"
        title="Clientes"
      />

      {props.clientes.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">{ClienteFieldsNames.RAZAO_SOCIAL}</th>
                <th scope="col">{ClienteFieldsNames.CNPJ}</th>
                <th scope="col">{ClienteFieldsNames.GESTOR_CONTRATO_NOME}</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.clientes.map((cliente, idx) => (
                <tr key={`${cliente.id}-${idx}`}>
                  <td scope="row">
                    <p style={styles.logoText}>{cliente.razaoSocial}</p>
                  </td>
                  <td>{cliente.cnpj}</td>
                  <td>{cliente.gestorContratoNome}</td>
                  <td>
                    <DetalhesModal cliente={cliente} />
                    <AtualizarModal cliente={cliente} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-dismissible alert-secondary">
          <i className="info icon"></i>
          Sem clientes cadastrados
        </div>
      )}
    </div>
  );
};

export default ClientesTable;

const styles = {
  logo: {
    borderRadius: "5px",
    marginRight: "5px",
    width: "30",
    height: "30",
  },
  logoText: {
    display: "table-cell",
    verticalAlign: "middle",
  },
};
