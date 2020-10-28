import CustomPopup from "components/global/CustomPopup";
import React, { Component } from "react";
import { Divider, Icon, List, Modal } from "semantic-ui-react";
import { Usuario, UsuarioFieldsNames } from "services/types/Usuario";

type Props = {
  usuario: Usuario;
  customButton: React.ReactNode;
  showPerfil: boolean;
};

const DetalhesModal = (props: Props) => {
  const modalId = "usuarioDetalhesModal";

  const renderListItem = (fieldName: string, fieldValue: string) => {
    return (
      <div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{fieldName}</h5>
        </div>
        <p className="mb-1">{fieldValue}</p>
        {/* <small>Donec id elit non mi porta.</small> */}
      </div>
    );
  };

  const renderButton = () => {
    return props.customButton ? (
      <p
        className="btn btn-info btn-sm btn-right-margin"
        data-toggle="modal"
        data-target={`#${modalId}`}
      >
        {props.customButton}
      </p>
    ) : (
      <button
        type="button"
        className="btn btn-info btn-sm btn-right-margin"
        data-toggle="modal"
        data-target={`#${modalId}`}
      >
        <i className="search icon no-margin"></i>
      </button>
    );
  };

  return (
    <>
      <a
        href="#"
        data-toggle="tooltip"
        title="Detalhes"
        data-placement="top"
        data-original-title="Detalhes"
      >
        {renderButton()}
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
                <i className="user icon"></i> Detalhes do Usuário
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
              <ul className="list-group">
                {renderListItem(UsuarioFieldsNames.NOME, props.usuario.nome)}

                {renderListItem(
                  UsuarioFieldsNames.USERNAME,
                  props.usuario.username
                )}

                {renderListItem(
                  UsuarioFieldsNames.EMAIL,
                  props.usuario.email ? props.usuario.email : ""
                )}

                {renderListItem(
                  UsuarioFieldsNames.CPF,
                  props.usuario.cpf ? props.usuario.cpf : ""
                )}

                {renderListItem(
                  UsuarioFieldsNames.TELEFONE,
                  props.usuario.telefone ? props.usuario.telefone : ""
                )}

                {renderListItem(
                  UsuarioFieldsNames.ENDERECO,
                  props.usuario.endereco ? props.usuario.endereco : ""
                )}
              </ul>

              {props.showPerfil && (
                <>
                  <hr />
                  <ul className="list-group">
                    {renderListItem(
                      UsuarioFieldsNames.PERFIS,
                      props.usuario.roles && props.usuario.roles[0]
                        ? props.usuario.roles[0].descricao
                        : "sem perfil definido"
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesModal;

DetalhesModal.defaultProps = {
  customButton: null,
  showPerfil: true,
};
