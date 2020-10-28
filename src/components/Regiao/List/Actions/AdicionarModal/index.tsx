import EstadosCidades from "components/global/Inputs/EstadosCidades";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Regiao } from "services/types/Regiao";
import * as Regioes from "services/requests/Regioes";
import { RegiaoContext } from "store/contexts/RegiaoContext";
import { showSaveMessage } from "components/global/Commons/StatusMessage";
import { RegioesMessages } from "../../../constants";
import { notyfWarn } from "utils/notifications";

const AdicionarModal = (props: { regiao: Regiao }) => {
  const { regioes, setRegioes } = useContext(RegiaoContext);
  const [wasReset, setWasReset] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [cidadesToAdd, setCidadesToAdd] = useState([]);

  const saveOrUpdateCidadesDaRegiao = async (e: any) => {
    let payload = {
      nome: props.regiao.nome,
      cidadesIds: cidadesToAdd,
    };
    let regiaoUpdated = await Regioes.update(
      props.regiao.id.toString(),
      payload
    );

    if (regiaoUpdated.status !== 200 && regiaoUpdated.status !== 201) {
      notyfWarn(regiaoUpdated.data);
      return;
    }

    let regiaoToUpdate = regioes.find(
      (regiao) => regiao.nome === regiaoUpdated.data.nome
    );
    if (regiaoToUpdate) {
      let idx = regioes.indexOf(regiaoUpdated.data as Regiao);
      regioes[idx] = regiaoUpdated.data;
      setRegioes([...regioes]);
      setOpen(false);
      showSaveMessage({ status: "OK" }, true, RegioesMessages);
    } else {
      regioes.push((regiaoUpdated as unknown) as Regiao);
      setRegioes([...regioes]);
      setOpen(false);
      showSaveMessage({ status: "OK" }, false, RegioesMessages);
    }
  };

  return (
    <Modal
      closeIcon
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="ui button icon mini gradient-green">
          <Icon name="add" />
        </button>
      }
    >
      <Modal.Header>
        <Icon name="file alternate" />
        Adicionar à Região {props.regiao.nome}
      </Modal.Header>

      <Modal.Content>
        <EstadosCidades
          nomeEstado="estado"
          nomeEstadoExibido="Estado"
          nomeCidade="cidade"
          nomeCidadeExibido="Cidade"
          required={false}
          updateSelectedOption={setCidadesToAdd}
          isMultipleCidades={true}
        />
      </Modal.Content>

      <Modal.Actions>
        <button
          disabled={!cidadesToAdd || cidadesToAdd.length <= 0 ? true : false}
          className="ui button icon mini gradient-green"
          onClick={saveOrUpdateCidadesDaRegiao}
        >
          Adicionar
        </button>
      </Modal.Actions>
    </Modal>
  );
};

export default AdicionarModal;
