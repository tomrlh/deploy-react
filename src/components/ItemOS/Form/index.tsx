import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import {
  ItemOSFieldsAPI,
  ItemOSFieldsNames,
  ItemOS,
} from "services/types/ItemOS";
import { PontoEmbarque } from "services/types/PontoEmbarque";
import { post, update } from "services/requests/ItemOS";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DateSelector from "components/global/Inputs/DateSelector";
import ValidableField from "components/global/Inputs/ValidableField";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import * as PontoEmbarqueReq from "services/requests//PontoEmbarque/PontoEmbarque";
import ProdutoFields from "./FieldGroups/ProdutoFields";
import PontoEmbarqueForm from "components/PontoEmbarque/Form";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { showSaveItemOSStatus, preencheItemOS } from "./functions";
import PageHeader from "components/global/Commons/PageHeader";
import PontoEmbarqueModal from "components/PontoEmbarque/Modal";

const OrdemServicoForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    reset,
  } = useForm();

  const [editando, setEditando] = useState(false);
  const [wasReset, setWasReset] = useState<boolean>(false);
  const [, setOpenPBModal] = useState<boolean>(false);
  const [newPBAdded, setNewPBAdded] = useState<boolean>(false);
  const [pontosEmbarque, setPontosEmbarque] = useState<PontoEmbarque[]>([]);
  const { selectedOrdemServico } = useContext(OrdemServicoContext);
  const { id } = useParams();

  const onSubmit = async (data: { [x: string]: any }) => {
    console.log("AQUI");
    data.ordemServicoId = selectedOrdemServico.id;
    let pontoEmbarqueData = pontosEmbarque.find(
      (ponto) => ponto.id === data.pontoEmbarqueId
    );
    data.cidadeId = pontoEmbarqueData?.cidadeId;
    console.log(getValues());
    let response: any = null;
    response = id
      ? await update(id, data as ItemOS)
      : await post(data as ItemOS);

    console.log("RESPONSE ITEM", response);

    showSaveItemOSStatus(response);
    reset();
    setWasReset(true);
  };

  const formatPontos = (pontosToFormat: PontoEmbarque[]) => {
    let newPontosFormatados = pontosToFormat.map((pontoEmbarque) => {
      return {
        id: pontoEmbarque.id.toString(),
        valor: pontoEmbarque.id.toString(),
        nome: pontoEmbarque.nome,
      };
    });
    return newPontosFormatados;
  };

  const getPontosEmbarque = async () => {
    let pontoEmbarque: PontoEmbarque[] = await PontoEmbarqueReq.get();
    setPontosEmbarque(pontoEmbarque);
  };

  useEffect(() => {
    /*eslint-disable */
    getPontosEmbarque();
    if (newPBAdded) {
      getPontosEmbarque();
    }

    const chamaPreencherItemOS = async () => {
      let itemOSCarregada = await preencheItemOS(id, setValue);
      if (itemOSCarregada) {
        // setUsuario(itemOSCarregada);
      }
    };

    if (!editando) {
      setEditando(true);
      chamaPreencherItemOS();
    }
  }, [newPBAdded]);

  return (
    <Container>
      <PageHeader
        iconPath="/icons/delivery-truck/delivery-truck-128px.png"
        title="Novo Item da O.S."
      />

      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-form-group">
          <DateSelector
            nomeCampo={ItemOSFieldsAPI.DATA_CLASSIFICACAO}
            nomeExibido={ItemOSFieldsNames.DATA_CLASSIFICACAO}
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
          />

          <ValidableField
            nomeCampo={ItemOSFieldsAPI.DESTINO}
            nomeExibido={ItemOSFieldsNames.DESTINO}
            errors={errors}
            register={register}
          />

          <ValidableField
            nomeCampo={ItemOSFieldsAPI.QTD_TONELADAS}
            nomeExibido={ItemOSFieldsNames.QTD_TONELADAS}
            errors={errors}
            register={register}
            number={true}
          />

          <ValidableField
            nomeCampo={ItemOSFieldsAPI.QTD_CARRETAS_DIA}
            nomeExibido={ItemOSFieldsNames.QTD_CARRETAS_DIA}
            errors={errors}
            register={register}
            number={true}
          />
        </div>

        <Divider />

        <ProdutoFields
          errors={errors}
          setValue={setValue}
          register={register}
        />

        <Divider />

        <ValidableSelectField
          nomeCampo={ItemOSFieldsAPI.PONTO_EMBARQUE}
          nomeExibido={ItemOSFieldsNames.PONTO_EMBARQUE}
          errors={errors}
          register={register}
          setValue={setValue}
          wasReset={wasReset}
          opcoes={formatPontos(pontosEmbarque)}
        />

        <PontoEmbarqueModal
          form={
            <PontoEmbarqueForm
              setNewPBAdded={setNewPBAdded}
              setOpenPBModal={setOpenPBModal}
            />
          }
        />

        <br />
        <br />

        <Button
          color="green"
          content={!id ? "Cadastrar" : "Atualizar"}
          icon="add"
          type="submit"
        />
      </form>
    </Container>
  );
};

export default OrdemServicoForm;
