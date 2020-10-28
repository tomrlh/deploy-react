import CustomPopup from "components/global/CustomPopup";
import React, { useContext, useEffect } from "react";
import { Icon, Modal } from "semantic-ui-react";
import { ItemOS } from "services/types/ItemOS";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import ClassificadorForm from "./Form";

export default function GerenciarSupervisaoModal(props: { itemOS: ItemOS }) {
  const modalId = "classificadorDetalhesModal";

  return (
    <>
      <CustomPopup
        text="Definir Classificador"
        trigger={
          <button
            type="button"
            className="btn btn-warning btn-sm btn-right-margin"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            <i className="user icon no-margin"></i>
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
                <i className="file alternate icon"></i> Definir Classificador
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
              <ClassificadorForm selectedItemOS={props.itemOS} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
