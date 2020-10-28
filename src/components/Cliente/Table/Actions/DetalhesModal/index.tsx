import React from "react";
import { Cliente } from "services/types/Cliente";
import GestoresClienteTable from "components/Contrato/Table/DetalhesModal/GestoresClienteTable";
import DadosEmpresaTabela from "./DadosEmpresaTable";
import CustomPopup from "components/global/CustomPopup";

const DetalhesModal = (props: { cliente: Cliente }) => {
  const modalId = "clienteDetalhesModal";

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
                <i className="file alternate icon"></i> Detalhes do Cliente
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
              <DadosEmpresaTabela cliente={props.cliente} />
              <GestoresClienteTable cliente={props.cliente} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesModal;
