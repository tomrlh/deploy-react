import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "semantic-ui-react";
import { ContratoFieldsNames, ContratoFromAPI } from "services/types/Contrato";
import DetalhesModal from "./DetalhesModal";
import { ContratoContext } from "store/contexts/ContratoContext";
import CustomPopup from "components/global/CustomPopup";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import PageHeader from "components/global/Commons/PageHeader";
import { getOSByContrato } from "components/OrdemServico/functions";

type Props = {
  contratos: Array<ContratoFromAPI>;
  canSetSupervisor: boolean;
  ordemServicoLink: string;
};

const ContratosTable = (props: Props) => {
  const { setSelectedContrato } = useContext(ContratoContext);
  const { setOrdensServico } = useContext(OrdemServicoContext);
  const navigate = useNavigate();

  const goToOrdensDeServico = async (contrato: ContratoFromAPI) => {
    setSelectedContrato(contrato);
    let selectedOrdensServico = await getOSByContrato(contrato);
    console.log("selectedOrdensServico", selectedOrdensServico);
    setOrdensServico(selectedOrdensServico);
    // `${CommonNav.HOME}${CommonNav.ADMIN}/${OrdemServicoNav.CONSULTAR}`
    // OLD navigate(`../../../${OrdemServicoNav.CONSULTAR}`);
    navigate(`../../${OrdemServicoNav.CONSULTAR}`);
  };

  return (
    <div>
      <PageHeader
        iconPath="/icons/contract/contract-128px.png"
        title="Contratos"
        withRadius
      />
      {props.contratos.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">{ContratoFieldsNames.CLIENTE}</th>
                <th scope="col">{ContratoFieldsNames.DATA_VENCIMENTO}</th>
                <th scope="col">
                  {ContratoFieldsNames.PERIODICIDADE_PAGAMENTO}
                </th>
                <th scope="col">{ContratoFieldsNames.REAIS_TONELADA}</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.contratos.map((contrato) => (
                <tr key={contrato.id}>
                  <td>{contrato.cliente.razaoSocial}</td>
                  <td>
                    <Label color="orange" horizontal>
                      {contrato.dataVencimento}
                    </Label>
                  </td>
                  <td>{contrato.periodicidadePagamento}</td>
                  <td>R$ {contrato.reaisPorTonelada}</td>
                  <td>
                    <DetalhesModal contrato={contrato} />
                    <CustomPopup
                      text="Visualizar OS's"
                      trigger={
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-right-margin"
                          onClick={() => goToOrdensDeServico(contrato)}
                        >
                          <i className="truck icon no-margin"></i>
                        </button>
                      }
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

export default ContratosTable;

ContratosTable.defaultProps = {
  contratos: [],
  paginationControls: {},
  OrdemServicoLink: null,
  canSetSupervisor: false,
  ordemServicoLink: "",
};
