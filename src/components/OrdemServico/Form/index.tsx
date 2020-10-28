import React, { useState, useContext } from "react";
import { post, update } from "services/requests/OrdemServico/OrdemServico";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DateSelector from "components/global/Inputs/DateSelector";
import {
  OrdemServicoFieldsAPI,
  OrdemServicoFieldsNames,
  IOrdemServico,
} from "services/types/OrdemServico";
import { ContratoContext } from "store/contexts/ContratoContext";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { showSaveOrdemServicoStatus } from "./functions";
import PageHeader from "components/global/Commons/PageHeader";

const OrdemServicoForm = () => {
  const { register, handleSubmit, errors, setValue, reset } = useForm();

  const { selectedContrato } = useContext(ContratoContext);
  const { ordensServico, setOrdensServico } = useContext(OrdemServicoContext);
  const [wasReset, setWasReset] = useState<boolean>(false);
  const { id } = useParams();

  const onSubmit = async (data: { [x: string]: any }) => {
    let response: any = null;
    data.status = "Não iniciada";
    data.contratoId = selectedContrato.id;
    console.log("AQUI", selectedContrato.id);

    response = id
      ? await update(id, data as IOrdemServico)
      : await post(data as IOrdemServico);

    console.log("STATUS", response.status);

    if (response.status === 200) {
      ordensServico.push(response.data);
      // estranho, mas se passar ordensServico ele não entende que é uma nova variável
      setOrdensServico(ordensServico.map((os) => os));
    }

    showSaveOrdemServicoStatus(response);
    reset();
    setWasReset(true);
  };

  return (
    <div>
      <PageHeader
        iconPath="/icons/service-order/service-order-128px.png"
        title="Nova Ordem de Serviço"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-form-group">
          <DateSelector
            nomeCampo={OrdemServicoFieldsAPI.DATA_INICIO}
            nomeExibido={OrdemServicoFieldsNames.DATA_INICIO}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
          />

          <input
            type="hidden"
            id="contratoId"
            name="contratoId"
            value={selectedContrato.id}
            ref={register({
              required: false,
            })}
          />
        </div>

        <button type="submit" className="btn btn btn-outline-primary">
          <i className="add icon"></i>
          {!id ? "Cadastrar" : "Atualizar"}
        </button>
      </form>
      <br />
    </div>
  );
};

export default OrdemServicoForm;
