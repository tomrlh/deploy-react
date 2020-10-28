import React, { useContext } from "react";
import {
  OrdemServico,
  OrdemServicoFieldsNames,
} from "services/types/OrdemServico";
import { Meta } from "services/types/Adonis/Meta";
import { useNavigate } from "react-router-dom";
import { CommonNav } from "routes/navigation/comum";
import { ItemOSNav } from "routes/navigation/itemos";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import StatusLabel from "components/global/Commons/StatusLabel";
import CustomPopup from "components/global/CustomPopup";
import SupervisorModal from "./Actions/SupervisorModal";
import { ItemOSContext } from "store/contexts/ItemOSContext";
import * as ItemOSReq from "services/requests/ItemOS";
import PageHeader from "components/global/Commons/PageHeader";
import Badge from "components/global/Commons/Badge";

type Props = {
  ordensServico: OrdemServico[];
  paginationControls: Meta;
  isAdministradorView: boolean;
  isClienteView: boolean;
  itensOSLink: string;
};

const OrdemServicoTable = (props: Props) => {
  // const [showSupervisorSelect, setShowSupervisorSelect] = useState(false);

  // const { selectedContrato } = useContext(ContratoContext);
  const { setSelectedOrdemServico } = useContext(OrdemServicoContext);
  const { setItensOS } = useContext(ItemOSContext);

  const navigate = useNavigate();

  const goToItensOSTable = async (os: OrdemServico) => {
    const itensByOS = await ItemOSReq.findByOS(os.id.toString());
    console.log(typeof setItensOS, os.itens, os, itensByOS);
    setSelectedOrdemServico(os);
    setItensOS(itensByOS);
    navigate(props.itensOSLink);
  };

  const goToItemOSForm = (os: OrdemServico) => {
    // carregar os itens da OS
    setSelectedOrdemServico(os);
    navigate(`${CommonNav.HOME}${CommonNav.CLIENTE}/${ItemOSNav.CADASTRAR}`);
  };

  // const defineSupervisor = (os: OrdemServico) => {
  //   setShowSupervisorSelect(true);
  // };

  return (
    <div>
      <PageHeader
        iconPath="/icons/service-order/service-order-128px.png"
        title="Ordens de Serviço"
      />
      {/* {selectedContrato.cliente ? selectedContrato.cliente.razaoSocial : ""} -
        Contrato {selectedContrato.id} */}

      {props.ordensServico.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">{OrdemServicoFieldsNames.DATA_INICIO}</th>
                <th scope="col">{OrdemServicoFieldsNames.STATUS}</th>
                <th scope="col">{OrdemServicoFieldsNames.ITENS}</th>
                <th scope="col">{OrdemServicoFieldsNames.SUPERVISOR}</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.ordensServico.map((os) => (
                <tr key={`${os.id}-${os.contratoId}`}>
                  <td>{os.id + "-" + new Date().getFullYear()}</td>
                  <td>{os.dataInicio}</td>
                  <td>
                    <StatusLabel text={os.status} />
                  </td>
                  <td>
                    {os.itens && os.itens.length > 0 ? (
                      <Badge
                        color="badge-primary"
                        text={os.itens.length.toString()}
                      />
                    ) : (
                      <Badge color="badge-secondary" text="Sem itens" />
                    )}
                  </td>
                  <td>
                    {os && os.supervisores
                      ? os.supervisores.map((supervisor, idx) => (
                          <Badge color="badge-primary" text={supervisor.nome} />
                        ))
                      : ""}
                  </td>
                  <td>
                    {props.isClienteView && (
                      <CustomPopup
                        text="Adicionar item"
                        trigger={
                          <button
                            type="button"
                            className="btn btn-success btn-sm btn-right-margin"
                            onClick={() => goToItemOSForm(os)}
                          >
                            <i className="plus icon no-margin" />
                          </button>
                        }
                      />
                    )}
                    <CustomPopup
                      text="Visualizar Itens"
                      trigger={
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-right-margin"
                          onClick={() => goToItensOSTable(os)}
                        >
                          <i className="map marker alternate icon no-margin"></i>
                        </button>
                      }
                    />
                    {props.isAdministradorView && <SupervisorModal os={os} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-dismissible alert-secondary">
          <i className="info icon"></i>
          Sem Ordens de Serviço cadastradas
        </div>
      )}
    </div>
  );
};

export default OrdemServicoTable;

OrdemServicoTable.defaultProps = {
  isAdministradorView: false,
  isClienteView: false,
};
