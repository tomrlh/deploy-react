import CustomPopup from "components/global/CustomPopup";
import React, { useContext, useEffect } from "react";
import { Icon, Modal } from "semantic-ui-react";
import { OrdemServico } from "services/types/OrdemServico";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import SupervisorForm from "./Form";
import SupervisoresTable from "./Table";

export default function SupervisorModal(props: { os: OrdemServico }) {
  const modalId = "supevisorModal";
  const { selectedOrdemServico, setSelectedOrdemServico } = useContext(
    OrdemServicoContext
  );

  useEffect(() => {
    setSelectedOrdemServico([]);
    setSelectedOrdemServico([]);
    setSelectedOrdemServico(props.os);
  }, []);

  return (
    <>
      <CustomPopup
        text="Gerenciar Supervisão"
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
                <i className="file alternate icon"></i> Gerenciar Supervisão
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
              <SupervisoresTable />
              <br />
              <SupervisorForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
