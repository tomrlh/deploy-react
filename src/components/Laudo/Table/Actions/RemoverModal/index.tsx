import React, { useContext } from "react";
import * as LaudoReq from "services/requests/Laudo";
import { notyfSuccess } from "utils/notifications";
import { Laudo } from "services/types/Laudo";
import { LaudoContext } from "store/contexts/LaudoContext";

const RemoverModal = (props: { laudo: Laudo }) => {
  const modalId = "laudoRemoveModal";
  const { laudos, setLaudos } = useContext(LaudoContext);

  const removerLaudo = async (id: string) => {
    const response = await LaudoReq.destroy(id);
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      notyfSuccess("Laudo removido");
      const updatedLaudos = laudos.filter((laudo) => laudo.id !== Number(id));
      setLaudos(updatedLaudos);
      // removeLaudo(id);
    }
  };

  return (
    <>
      <a
        href="/#"
        data-toggle="tooltip"
        title="Remover"
        data-placement="top"
        data-original-title="Remover"
      >
        <button
          type="button"
          className="btn btn-danger btn-sm btn-right-margin"
          data-toggle="modal"
          data-target={`#${modalId}`}
        >
          <i className="close icon no-margin fix-close-button-margin"></i>
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
                <i className="user icon"></i> Deseja remover o laudo{" "}
                {props.laudo.id}?
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
            <div className="modal-footer">
              <button
                type="button"
                className="ui button btn-info icon"
                onClick={() => {
                  removerLaudo(props.laudo.id.toString());
                }}
              >
                <i className="check icon no-margin"></i>
              </button>
              <button type="button" className="ui button btn-danger icon">
                <i className="close icon no-margin"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoverModal;
