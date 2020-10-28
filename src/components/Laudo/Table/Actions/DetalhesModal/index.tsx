import React from "react";
import CustomPopup from "components/global/CustomPopup";
import { Laudo, LaudoFieldsNames } from "services/types/Laudo";

const DetalhesModal = (props: { laudo: Laudo }) => {
  const modalId = "laudoDetalhesModal";

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
                <i className="file alternate icon"></i> Detalhes do Laudo
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
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.PLACA}</h5>
                  {props.laudo.placa}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.PESO_TRANSPORTE}</h5>
                  {props.laudo.pesoTransporte}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.NOTA_FISCAL}</h5>
                  {props.laudo.notaFiscal}
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.VISTORIADO}</h5>
                  {props.laudo.veiculoVistoriado}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.INSETOS_VIVOS}</h5>
                  {props.laudo.insetosVivos}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.INSETOS_MORTOS}</h5>
                  {props.laudo.insetosMortos}
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.ODOR_ESTRANHO}</h5>
                  {props.laudo.odorEstranho}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.SEMENTES_TOXICAS}</h5>
                  {props.laudo.sementesToxicas}
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.PESO_AMOSTRA}</h5>
                  {props.laudo.pesoAmostra}%
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.COLETA_AMOSTRA}</h5>
                  {props.laudo.coletaAmostra}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.MEI}</h5>
                  {props.laudo.mei}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.UMIDADE}</h5>
                  {props.laudo.umidade}%
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.MOFADOS}</h5>
                  {props.laudo.mofados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.ARDIDOS}</h5>
                  {props.laudo.ardidos}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.FERMENTADOS}</h5>
                  {props.laudo.fermentados}%
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.GERMINADOS}</h5>
                  {props.laudo.germinados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.QUEBRADOS}</h5>
                  {props.laudo.quebrados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.QUEIMADOS}</h5>
                  {props.laudo.queimados}%
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.PICADOS}</h5>
                  {props.laudo.picados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.IMATUROS}</h5>
                  {props.laudo.imaturos}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.CHOCHOS}</h5>
                  {props.laudo.chochos}%
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.ESVERDEADOS}</h5>
                  {props.laudo.esverdeados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.GESSADOS}</h5>
                  {props.laudo.gessados}%
                </div>
                <div className="col-6 col-md-4">
                  <h5>{LaudoFieldsNames.DANIFICADOS}</h5>
                  {props.laudo.danificados}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesModal;
