import CustomPopup from "components/global/CustomPopup";
import React from "react";
import { Icon, Modal } from "semantic-ui-react";
import { Cliente } from "services/types/Cliente";
import ClienteForm from "../../../Form";

export default function AtualizarModal(props: { cliente: Cliente }) {
  const modalId = "clienteAtualizarModal";

  return (
    <>
      <CustomPopup
        text="Atualizar"
        trigger={
          <button
            type="button"
            className="btn btn-warning btn-sm btn-right-margin"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            <i className="pencil icon no-margin"></i>
          </button>
        }
      />

      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="form icon"></i> Formulário de Cliente
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ClienteForm
                isEditing={true}
                cliente={props.cliente}
                // udpateModalState={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
