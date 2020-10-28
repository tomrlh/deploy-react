import React, { useContext } from "react";
import { Button, Header, Icon, List, Message } from "semantic-ui-react";
import { OrdemServico } from "services/types/OrdemServico";
import { updateRemoveSupervisor } from "services/requests/OrdemServico/OrdemServico";
import { OSSupervisorMessages } from "../constants";
import { showDestroyMessage } from "components/global/Commons/StatusMessage";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";

type Props = {
  selectedOrdemServico: OrdemServico;
};

export default function SupervisoresTable() {
  const { selectedOrdemServico, setSelectedOrdemServico } = useContext(
    OrdemServicoContext
  );

  const destroySupervisor = async (id: number, supervisorId: number) => {
    let response = await updateRemoveSupervisor(
      id.toString(),
      supervisorId.toString()
    );
    showDestroyMessage(response, OSSupervisorMessages);
    let newSupervisores = selectedOrdemServico.supervisores.filter(
      (supervisor) => supervisor.id !== supervisorId
    );
    selectedOrdemServico.supervisores = newSupervisores;
    setSelectedOrdemServico([]);
    setSelectedOrdemServico([]);
    setSelectedOrdemServico(selectedOrdemServico);
  };

  return (
    <div>
      <Header as="h3">
        <Icon name="users" />
        Supervisores da OS {selectedOrdemServico.id}
      </Header>
      {selectedOrdemServico.supervisores &&
      selectedOrdemServico.supervisores.length > 0 ? (
        <ul className="list-group">
          {selectedOrdemServico.supervisores.map((supervisor, idx) => (
            <List.Item key={idx}>
              <List.Content floated="right">
                <Button
                  icon="close"
                  color="red"
                  basic
                  size="mini"
                  onClick={() =>
                    destroySupervisor(selectedOrdemServico.id, supervisor.id)
                  }
                />
              </List.Content>
              {supervisor.nome}
              <List.Content>
                {supervisor.alocacaoFuncionarioCampo?.map((alocacao, idx) => (
                  <span key={idx}>
                    {alocacao.nome}-{alocacao.estado.uf}
                  </span>
                ))}
              </List.Content>
            </List.Item>
          ))}
        </ul>
      ) : (
        <Message style={{ marginLeft: "10px" }}>
          <p>Sem supervisores vinculados</p>
        </Message>
      )}
    </div>
  );
}
