import CustomPopup from "components/global/CustomPopup";
import React from "react";
import { ItemOS } from "services/types/ItemOS";
import StatusItemForm from "./Form";

export default function StatusItemModal(props: { itemOS: ItemOS }) {
  const modalId = "classificadorDetalhesModal";

  return (
    <>
      <CustomPopup
        text="Atualizar Status"
        trigger={
          <button
            type="button"
            className="btn btn-primary btn-sm btn-right-margin"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            <i className="tag icon no-margin" />
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
                <i className="file alternate icon"></i> Atualizar Status do Item
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
              <StatusItemForm itemOS={props.itemOS} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
