import CustomPopup from "components/global/CustomPopup";
import React from "react";
import { Icon, Modal } from "semantic-ui-react";
import { Cliente } from "services/types/Cliente";
import PontoEmbarqueForm from "../Form";

export default function PontoEmbarqueModal(props: { form: React.ReactNode }) {
  const modalId = "novoPontoEmbarqueModal";

  return (
    <>
      <CustomPopup
        text="Novo"
        trigger={
          <button
            type="button"
            className="btn btn-success btn-sm btn-right-margin"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            <i className="add icon no-margin"></i>
            Cadastrar novo ponto de embarque
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
                <i className="form icon"></i> Novo Ponto de Embarque
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
            <div className="modal-body">{props.form}</div>
          </div>
        </div>
      </div>
    </>
  );
}
