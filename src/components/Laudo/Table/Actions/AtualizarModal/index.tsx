import React from "react";
import { Laudo } from "services/types/Laudo";
import LaudoForm from "../../../Form";

export default function AtualizarModal(props: { laudo: Laudo }) {
  const modalId = "laudoEditarModal";

  return (
    <>
      <a
        href="/#"
        data-toggle="tooltip"
        title="Editar"
        data-placement="top"
        data-original-title="Editar"
      >
        <button
          type="button"
          className="btn btn-warning btn-sm btn-right-margin"
          data-toggle="modal"
          data-target={`#${modalId}`}
        >
          <i className="pencil icon no-margin"></i>
        </button>
      </a>

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
                <i className="file alternate icon"></i> Editar Laudo
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
              <LaudoForm laudo={props.laudo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
