import React from "react";
import { Button, Header, Icon, List, Modal } from "semantic-ui-react";
import { ContratoFromAPI } from "services/types/Contrato";
import GestoresClienteTable from "./GestoresClienteTable";
import ContratoDetails from "./ContratoDetails";
import CustomPopup from "components/global/CustomPopup";
import { download } from "services/requests/Contratos/Contratos";
import { BASE_URL } from "utils/constants";

const DetalhesModal = (props: { contrato: ContratoFromAPI }) => {
  const modalId = `contratoDetalhesModal${props.contrato.id}`;

  return (
    <>
      <CustomPopup
        text="Detalhes"
        trigger={
          <button
            type="button"
            className="btn btn-info btn-sm btn-right-margin"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            <i className="search icon no-margin"></i>
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
                <i className="file alternate icon"></i> Detalhes do Contrato
                <legend>
                  <a
                    href={`${BASE_URL}download/${props.contrato.contratoKey}`}
                    target="_blank"
                    style={{ fontSize: "14px" }}
                  >
                    Baixar contrato
                  </a>
                </legend>
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
              <GestoresClienteTable cliente={props.contrato.cliente} />
              <ContratoDetails contrato={props.contrato} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesModal;
