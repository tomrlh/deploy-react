import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { ResponsavelCliente } from "services/types/ResponsavelCliente";
import ResponsavelClienteForm from "../../Form";

export default function AtualizarModal(props: {
  responsavel: ResponsavelCliente;
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalState = () => {
    setOpenModal(!openModal);
  };

  return (
    <Modal
      open={openModal}
      trigger={
        <Button
          icon="pencil"
          color="orange"
          basic
          size="mini"
          onClick={handleModalState}
        />
      }
    >
      <Modal.Content>
        <ResponsavelClienteForm
          isEditing={true}
          responsavel={props.responsavel}
          udpateModalState={setOpenModal}
        />
      </Modal.Content>
    </Modal>
  );
}

AtualizarModal.defaultProps = {
  responsavel: {},
};
