import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Table,
  Message,
  Segment,
  Label,
  Icon,
} from "semantic-ui-react";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import PageHeader from "components/global/Commons/PageHeader";
import { Link } from "react-router-dom";
import { LaudoNav } from "routes/navigation/laudo";
import GerenciarSupervisaoModal from "./Actions/ClassificadorModal";
import { ItemOS, ItemOSFieldsNames } from "services/types/ItemOS";
import { ItemOSNav } from "routes/navigation/itemos";
import CustomPopup from "components/global/CustomPopup";
import * as LaudoReq from "services/requests/Laudo";
import { LaudoContext } from "store/contexts/LaudoContext";
import { useNavigate } from "react-router-dom";
import { CODIGO } from "utils/constants";
import DetalhesModal from "components/Usuario/Table/Actions/DetalhesModal";
import StatusItemModal from "./Actions/StatusItemModal";

type Props = {
  itensOS: ItemOS[];
  isClassificadorView: boolean;
  isSupervisaoView: boolean;
  isClienteView: boolean;
};

const ItemOSTable = (props: Props) => {
  const { setLaudos } = useContext(LaudoContext);
  const navigate = useNavigate();

  const goLaudosTable = async (itemOS: ItemOS) => {
    const laudosByItem = await LaudoReq.findByItem(itemOS.id.toString());
    console.log(typeof laudosByItem, laudosByItem);
    setLaudos(laudosByItem);
    navigate(`../../../${LaudoNav.CONSULTAR}`);
  };

  const renderClassificadorLabel = (text: string) => {
    return <p key={text}>{text}</p>;
  };

  return (
    <>
      {props.itensOS && props.itensOS.length > 0 ? (
        <PageHeader
          iconPath="/icons/itens-os/itens-os-128px.png"
          title={`Itens da O.S. ${props.itensOS[0].ordemServicoId}-2020`}
        />
      ) : (
        <PageHeader
          iconPath="/icons/itens-os/itens-os-128px.png"
          title="Itens da O.S."
        />
      )}

      {props.itensOS && props.itensOS.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={styles.largeCell}>{CODIGO}</th>
                <th>{ItemOSFieldsNames.DATA_CLASSIFICACAO}</th>
                <th>{ItemOSFieldsNames.STATUS}</th>
                <th>{ItemOSFieldsNames.DESTINO}</th>
                <th>{ItemOSFieldsNames.PRODUTO_NOME}</th>
                <th>{ItemOSFieldsNames.PRODUTO_TESTE}</th>
                <th>{ItemOSFieldsNames.PRODUTO_TOLERANCIA}</th>
                <th>{ItemOSFieldsNames.QTD_TONELADAS}</th>
                <th>{ItemOSFieldsNames.QTD_CARRETAS_DIA}</th>
                {!props.isClassificadorView && (
                  <th>{ItemOSFieldsNames.CLASSIFICADOR}</th>
                )}
                <th style={styles.bigCell}>
                  {ItemOSFieldsNames.PONTO_EMBARQUE}
                </th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.itensOS.map((itemOS, idx) => (
                <tr key={`${itemOS.id}-${idx}`}>
                  <td>{`${itemOS.id}-${itemOS.ordemServicoId}-2020`}</td>
                  <td>{itemOS.dataClassificacao}</td>
                  <td>{itemOS.status ? itemOS.status : "Não iniciada"}</td>
                  <td>{itemOS.destino}</td>
                  <td>{itemOS.produtoNome}</td>
                  <td>{itemOS.produtoTeste}</td>
                  <td>{itemOS.produtoTolerancia}</td>
                  <td>
                    {itemOS.qtdToneladas
                      .toString()
                      .replace("_", "")
                      .replace("_", "")}
                  </td>
                  <td>
                    {itemOS.qtdCarretasDia
                      .toString()
                      .replace("_", "")
                      .replace("_", "")}
                  </td>
                  {!props.isClassificadorView && (
                    <td>
                      {itemOS.classificadores &&
                      itemOS.classificadores.length > 0 ? (
                        <div>
                          {itemOS.classificadores.map((classificador) => (
                            <DetalhesModal
                              usuario={classificador}
                              showPerfil={false}
                              customButton={renderClassificadorLabel(
                                classificador.nome
                              )}
                            />
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  )}
                  <td>
                    {itemOS.pontoEmbarque && itemOS.pontoEmbarque.nome && (
                      <div className="ui label">
                        <i className="map marker alternate icon red"></i>
                        {itemOS.pontoEmbarque.nome}-
                        {itemOS.pontoEmbarque.cidade.estado.uf}
                      </div>
                    )}
                  </td>
                  <td style={styles.largeCell}>
                    {props.isClienteView && (
                      <Link to={`../../../${ItemOSNav.ATUALIZAR}/${itemOS.id}`}>
                        <CustomPopup
                          text="Atualizar"
                          trigger={
                            <button className="btn btn-warning btn-sm btn-right-margin">
                              <i className="pencil icon no-margin"></i>
                            </button>
                          }
                        />
                      </Link>
                    )}

                    {props.isClassificadorView && (
                      <Link to={`../../../${LaudoNav.CADASTRAR}`}>
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-right-margin"
                        >
                          <i className="add icon"></i> Laudo
                        </button>
                      </Link>
                    )}

                    {props.isClassificadorView && (
                      <StatusItemModal itemOS={itemOS} />
                    )}

                    {!props.isClienteView && (
                      <CustomPopup
                        text="Visualizar Laudos"
                        trigger={
                          <button
                            type="button"
                            className="btn btn-info btn-sm btn-right-margin"
                            onClick={() => goLaudosTable(itemOS)}
                          >
                            <i className="list icon no-margin"></i>
                          </button>
                        }
                      />
                    )}

                    {props.isSupervisaoView && (
                      <GerenciarSupervisaoModal itemOS={itemOS} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-dismissible alert-secondary">
          <i className="info icon"></i>
          Sem Itens da OS cadastrados
        </div>
      )}
    </>
  );
};

export default ItemOSTable;

ItemOSTable.defaultProps = {
  itensOS: [],
  isClassificadorView: false,
  isSupervisaoView: false,
  isClienteView: false,
};

const styles = {
  mediumCell: {
    minWidth: "60px",
  },
  largeCell: {
    minWidth: "120px",
  },
  bigCell: {
    minWidth: "150px",
  },
};
