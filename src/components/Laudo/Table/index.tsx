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
import { ItemOSFieldsNames } from "services/types/ItemOS";
import { Laudo, LaudoFieldsNames } from "services/types/Laudo";
import { LaudoContext } from "store/contexts/LaudoContext";
import RemoveModal from "components/Usuario/Table/Actions/RemoveModal";
import RemoverModal from "./Actions/RemoverModal";
import { gerarLaudo, somarGraosAvariados } from "../functions";
import AtualizarModal from "./Actions/AtualizarModal";
import DetalhesModal from "./Actions/DetalhesModal";

type Props = {
  laudos: Laudo[];
  isClassificadorView: boolean;
};

const LaudoTable = (props: Props) => {
  return (
    <Container>
      <PageHeader
        title="Laudos do Item"
        iconPath="/icons/laudo-report/laudo-report-128px.png"
      />
      {props.laudos && props.laudos.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">{LaudoFieldsNames.TOTAL_AVARIADOS}</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.laudos.map((laudo, idx) => (
                <tr>
                  <td>{laudo.id}-2020</td>
                  <td>{somarGraosAvariados(laudo)} grãos</td>
                  <td>
                    <DetalhesModal laudo={laudo} />

                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-right-margin"
                      onClick={() => gerarLaudo(laudo)}
                    >
                      <i className="print icon no-margin"></i>
                    </button>

                    {props.isClassificadorView && (
                      <AtualizarModal laudo={laudo} />
                    )}

                    {props.isClassificadorView && (
                      <RemoverModal laudo={laudo} />
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
          Sem laudos cadastrados
        </div>
      )}
    </Container>
  );
};

export default LaudoTable;

LaudoTable.defaultProps = {
  laudos: [],
  isClassificadorView: true,
};

const styles = {
  largerCell: {
    minWidth: "200px",
  },
};
