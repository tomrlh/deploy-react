import React, { useContext } from "react";
import { Header, Icon, Message, Table, Button } from "semantic-ui-react";
import { destroy } from "services/requests/ResponsavelCliente";
import {
  showDestroyResponsavelStatus,
  removeResponsavel,
} from "components/Cliente/Form/functions";
import { ResponsavelClienteFieldsNames } from "services/types/ResponsavelCliente";
import AtualizarModal from "./Actions/AtualizarModal";
import { ClienteFormContext } from "store/contexts/ClienteFormContext";

type Props = {};

const ResponsavelClienteTable = (props: Props) => {
  const { responsaveisCliente, setResponsaveisCliente } = useContext(
    ClienteFormContext
  );
  const destroyResponsavel = async (id: number) => {
    let response = await destroy(id);
    showDestroyResponsavelStatus(response);
    setResponsaveisCliente(removeResponsavel(id, responsaveisCliente));
  };

  return (
    <div>
      <Header as="h3">
        <Icon name="users" />
        Responsáveis Cadastrados
      </Header>
      {responsaveisCliente && responsaveisCliente.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">{ResponsavelClienteFieldsNames.NOME}</th>
                <th scope="col">{ResponsavelClienteFieldsNames.POSICAO}</th>
                <th scope="col">{ResponsavelClienteFieldsNames.EMAIL}</th>
                <th scope="col">{ResponsavelClienteFieldsNames.TELEFONE}</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {responsaveisCliente.map((respCliente) => (
                <tr>
                  <td>{respCliente.nome}</td>
                  <td>{respCliente.posicao}</td>
                  <td>{respCliente.email}</td>
                  <td>{respCliente.telefone}</td>
                  <td>
                    <AtualizarModal responsavel={respCliente} />
                    <Button
                      icon="close"
                      color="red"
                      basic
                      size="mini"
                      onClick={() => destroyResponsavel(respCliente.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-dismissible alert-secondary">
          <i className="info icon"></i>
          Sem responsáveis cadastrados
        </div>
      )}
    </div>
  );
};

export default ResponsavelClienteTable;

ResponsavelClienteTable.defaultProps = {};
