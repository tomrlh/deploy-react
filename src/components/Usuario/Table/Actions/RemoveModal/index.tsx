import React from "react";
import { Usuario } from "services/types/Usuario";
import * as UsuarioReq from "services/requests/Usuarios/Usuarios";
import { notyfSuccess } from "utils/notifications";

const RemoveModal = (props: {
  usuario: Usuario;
  setRecarregarUsuarios: Function;
}) => {
  const modalId = "usuarioRemoveModal";

  const removeUsuario = async (id: string) => {
    const response = await UsuarioReq.destroy(id);
    if (response.status === 200 || response.status === 201) {
      notyfSuccess("Usuário removido");
      props.setRecarregarUsuarios(true);
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
                <i className="user icon"></i> Deseja remover o usuário{" "}
                {props.usuario.nome}?
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
                  removeUsuario(props.usuario.id.toString());
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

export default RemoveModal;
