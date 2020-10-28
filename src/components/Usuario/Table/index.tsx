import React from "react";
import { Usuario, UsuarioFieldsNames } from "services/types/Usuario";
import { Role } from "services/types/Role";
import { Link } from "react-router-dom";
import PageHeader from "components/global/Commons/PageHeader";
import DetalhesModal from "./Actions/DetalhesModal";
import { UsuarioNav } from "routes/navigation/usuario";
import RemoveModal from "./Actions/RemoveModal";
import CustomPopup from "components/global/CustomPopup";

type Props = {
  usuarios: Usuario[];
  setRecarregarUsuarios: Function;
};

const getFirstRole = (roles: Role[] | null) => {
  return roles && roles[0] ? roles[0].descricao : "";
};

const UsuariosTable = (props: Props) => {
  return (
    <div>
      <PageHeader
        title="Usuários"
        iconPath="/icons/employee/employee-128px.png"
        withRadius
      />

      {props.usuarios.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>{UsuarioFieldsNames.NOME}</th>
                <th>{UsuarioFieldsNames.USERNAME}</th>
                <th>{UsuarioFieldsNames.ALOCACAO_CAMPO}</th>
                <th>{UsuarioFieldsNames.PERFIS}</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.usuarios.map((usuario) => (
                <tr>
                  <td>{usuario.nome}</td>
                  <td>{usuario.username}</td>
                  <td>
                    {usuario &&
                    usuario.alocacaoFuncionarioCampo &&
                    usuario.alocacaoFuncionarioCampo.length > 0 ? (
                      <div>
                        {usuario.alocacaoFuncionarioCampo.map(
                          (alocacao, idx) => (
                            <div className="ui label" key={idx}>
                              <i className="map marker alternate icon red"></i>
                              {alocacao.nome}-{alocacao.estado.uf}
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {usuario &&
                    usuario.alocacaoGerencia &&
                    usuario.alocacaoGerencia.length > 0 ? (
                      <div>
                        {usuario.alocacaoGerencia.map((alocacao, idx) => (
                          <div className="ui label" key={idx}>
                            <i className="map marker alternate icon green"></i>
                            {alocacao.nome}
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {usuario && usuario.regiao ? (
                      <div className="ui label">
                        <i className="map marker alternate icon red"></i>
                        {usuario.regiao.nome}
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>{getFirstRole(usuario.roles)}</td>
                  <td>
                    <DetalhesModal usuario={usuario} />
                    <Link to={`../${UsuarioNav.EDITAR}/${usuario.id}`}>
                      <CustomPopup
                        text="Atualizar"
                        trigger={
                          <button className="btn btn-warning btn-sm btn-right-margin">
                            <i className="pencil icon no-margin"></i>
                          </button>
                        }
                      />
                    </Link>
                    <RemoveModal
                      usuario={usuario}
                      setRecarregarUsuarios={props.setRecarregarUsuarios}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-dismissible alert-secondary">
          <i className="info icon"></i>
          Sem contratos cadastrados
        </div>
      )}
    </div>
  );
};

export default UsuariosTable;
