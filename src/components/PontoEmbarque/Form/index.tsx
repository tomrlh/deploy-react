import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import { ICliente, ClienteFieldsAPI, Cliente } from "services/types/Cliente";
import {
  find,
  post,
  update,
} from "services/requests/PontoEmbarque/PontoEmbarque";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Notyf } from "notyf";
import ValidableField from "components/global/Inputs/ValidableField";
import {
  PontoEmbarqueFieldsAPI,
  PontoEmbarqueFieldsNames,
  PontoEmbarque,
} from "services/types/PontoEmbarque";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import ValidableTextArea from "components/global/Inputs/ValidableTextArea";
import {
  ResponsavelPBFieldsAPI,
  ResponsavelPBFieldsNames,
} from "services/types/ResponsavelPB";
import MapaEmbarque from "./FieldGroups/MapaEmbarque";
import PontoEmbarqueHeader from "../Components/PontoEmbarqueHeader";
import { get as getPontosReq } from "services/requests/PontoEmbarque/PontoEmbarque";
import {
  showDestroyResponsavelStatus,
  showSavePontoEmbarqueStatus,
} from "./functions";
import EstadosCidades from "../../global/Inputs/EstadosCidades";
import PageHeader from "components/global/Commons/PageHeader";

type Opcoes = {
  id: string;
  valor: any;
  nome: string;
};

type Props = {
  setOpenPBModal: Function;
  setNewPBAdded: Function;
};

const PontoEmbarqueForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    trigger,
    reset,
  } = useForm();

  const [editando, setEditando] = useState(false);
  const [wasReset, setWasReset] = useState<boolean>(false);
  const [latitude, setLatitude] = useState(0);
  const [pontosEmbarqueFormatted, setPontosEmbarqueFormatted] = useState<
    Opcoes[]
  >([]);
  const [longitude, setLongitude] = useState(0);
  const { id } = useParams();

  const onSubmit = async (data: { [x: string]: any }) => {
    let response: any = null;

    response = id
      ? await update(id, data as PontoEmbarque)
      : await post(data as PontoEmbarque);

    showSavePontoEmbarqueStatus(response);
    reset();
    setWasReset(true);
    console.log("REPONSE", response, response.status);
    if (response.status === 200) {
      if (props.setNewPBAdded) props.setNewPBAdded(true);
      showSavePontoEmbarqueStatus(response);
    } else {
      props.setOpenPBModal(false);
      showDestroyResponsavelStatus(response);
    }
  };

  useEffect(() => {
    /*const preenchePontoEmbarque = async () => {
      if (id) {
        let cliente: Cliente = await find(id);
        console.log(cliente);
        Object.values(ClienteFieldsAPI).forEach((campo) => {
          setValue(campo, cliente[campo]);
        });
      }
    };
    preenchePontoEmbarque();*/
    const carregaPontos = async () => {
      const data = await getPontosReq();
      console.log("data", data);
      const newPontosEmbarqueFormatted = data.map((ponto: PontoEmbarque) => {
        return {
          id: ponto.id ? ponto.id.toString() : "0",
          valor: ponto,
          nome: ponto.nome,
        };
      });
      setPontosEmbarqueFormatted(newPontosEmbarqueFormatted);
    };
    carregaPontos();
  }, []);

  return (
    <div>
      <PageHeader
        iconPath="/icons/marker/marker-128px.png"
        title="Ponto de Embarque"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-form-group">
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.NOME}
            nomeExibido={PontoEmbarqueFieldsNames.NOME}
            errors={errors}
            register={register}
          />
        </div>

        <EstadosCidades
          errors={errors}
          register={register}
          setValue={setValue}
          wasReset={wasReset}
          nomeEstado="estado"
          nomeEstadoExibido="Estado"
          nomeCidade={PontoEmbarqueFieldsAPI.CIDADE}
          nomeCidadeExibido={PontoEmbarqueFieldsNames.CIDADE}
        />

        <div className="flex-form-group">
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.BAIRRO}
            nomeExibido={PontoEmbarqueFieldsNames.BAIRRO}
            errors={errors}
            register={register}
          />
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.LOGRADOURO}
            nomeExibido={PontoEmbarqueFieldsNames.LOGRADOURO}
            errors={errors}
            register={register}
          />
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.CEP}
            nomeExibido={PontoEmbarqueFieldsNames.CEP}
            errors={errors}
            register={register}
          />
        </div>

        <div className="flex-form-group">
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.REFERENCIA}
            nomeExibido={PontoEmbarqueFieldsNames.REFERENCIA}
            errors={errors}
            register={register}
          />
        </div>

        <div className="flex-form-group">
          <ValidableTextArea
            nomeCampo={PontoEmbarqueFieldsAPI.ROTEIRO_CHEGADA}
            nomeExibido={PontoEmbarqueFieldsNames.ROTEIRO_CHEGADA}
            errors={errors}
            register={register}
          />
        </div>

        <div className="flex-form-group">
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.RESPONSAVEL_FAZENDA_NOME}
            nomeExibido={PontoEmbarqueFieldsNames.RESPONSAVEL_FAZENDA_NOME}
            errors={errors}
            register={register}
          />
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.RESPONSAVEL_FAZENDA_TELEFONE}
            nomeExibido={PontoEmbarqueFieldsNames.RESPONSAVEL_FAZENDA_TELEFONE}
            errors={errors}
            register={register}
          />
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.RESPONSAVEL_TRANSPORTADORA_NOME}
            nomeExibido={
              PontoEmbarqueFieldsNames.RESPONSAVEL_TRANSPORTADORA_NOME
            }
            errors={errors}
            register={register}
          />
          <ValidableField
            nomeCampo={
              PontoEmbarqueFieldsAPI.RESPONSAVEL_TRANSPORTADORA_TELEFONE
            }
            nomeExibido={
              PontoEmbarqueFieldsNames.RESPONSAVEL_TRANSPORTADORA_TELEFONE
            }
            errors={errors}
            register={register}
          />
        </div>

        <Segment style={{ width: "100%" }}>
          <MapaEmbarque
            nomeLatitude={PontoEmbarqueFieldsAPI.LATITUDE}
            nomeLongitude={PontoEmbarqueFieldsAPI.LONGITUDE}
            setValue={setValue}
            trigger={trigger}
          />
        </Segment>

        <div className="flex-form-group">
          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.LATITUDE}
            nomeExibido={PontoEmbarqueFieldsNames.LATITUDE}
            errors={errors}
            register={register}
            setValue={setValue}
          />

          <ValidableField
            nomeCampo={PontoEmbarqueFieldsAPI.LONGITUDE}
            nomeExibido={PontoEmbarqueFieldsNames.LONGITUDE}
            errors={errors}
            register={register}
          />
        </div>

        <Button
          color="green"
          content={!id ? "Cadastrar" : "Atualizar"}
          icon="add"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PontoEmbarqueForm;

PontoEmbarqueForm.defaultProps = {
  setOpenPBModal: undefined,
  setNewPBAdded: undefined,
} as Partial<Props>;
