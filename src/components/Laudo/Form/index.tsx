import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Image,
} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Notyf } from "notyf";
// import MapaEmbarque from "./FieldGroups/MapaEmbarque";
// import PontoEmbarqueHeader from "../Components/PontoEmbarqueHeader";
import jsPDF from "jspdf";
import { post, update } from "services/requests/Laudo";
import TransporteFields from "./FieldGroups/TransporteFields";
import QualidadeFields from "./FieldGroups/QualidadeFields";
import { Laudo, LaudoFieldsAPI } from "services/types/Laudo";
import * as functions from "../functions";
import { LaudoContext } from "store/contexts/LaudoContext";

const LaudoForm = (props: { laudo: Laudo }) => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    trigger,
    reset,
  } = useForm();

  const [editando, setEditando] = useState(false);
  const [wasReset, setWasReset] = useState<boolean>(false);
  const [isSoja, setIsSoja] = useState(true);
  const [laudo, setLaudo] = useState<Laudo>({} as Laudo);
  const { laudos, setLaudos } = useContext(LaudoContext);
  const { id } = useParams();

  const onSubmit = async (data: { [x: string]: any }) => {
    let isToUpdate = props.laudo && props.laudo.id ? true : false;
    let laudo = data as Laudo;
    if (props.laudo) laudo.itemOSId = props.laudo.itemOSId;

    let response = isToUpdate
      ? await update(props.laudo.id.toString(), laudo)
      : await post(laudo);

    console.log("aqui", data, response, isToUpdate);

    functions.showSaveStatusMessage(response, isToUpdate);

    if (isToUpdate) {
      let updatedLaudos = laudos.map((laudo) => {
        if (laudo.id === response.data.laudo.id) {
          return response.data.laudo;
        }
        return laudo;
      });
      setLaudos(updatedLaudos);
      console.log(updatedLaudos);
    } else {
      let updatedLaudos = laudos;
      updatedLaudos.push(response.data);
      setLaudos(updatedLaudos);
    }

    reset();
  };

  useEffect(() => {
    if (props.laudo) {
      Object.values(LaudoFieldsAPI).forEach((campo) => {
        setValue(campo, props.laudo[campo]);
      });
    }
  }, []);

  return (
    <Container>
      <Header as="h3">
        <Image
          src="/icons/laudo-report/laudo-report-128px.png"
          avatar
          size="large"
          style={{ marginLeft: "2px" }}
        />
        Novo Laudo
      </Header>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <TransporteFields
            trigger={trigger}
            errors={errors}
            setValue={setValue}
            register={register}
          />

          <QualidadeFields
            trigger={trigger}
            errors={errors}
            setValue={setValue}
            register={register}
          />

          <button
            className="btn btn-outline-primary"
            type="submit"
            // onClick={onSubmit}
            // onClick={jsPDFGenerator}
          >
            <i className="add icon" />
            {!id ? "Cadastrar" : "Atualizar"}
          </button>
        </fieldset>
      </form>
    </Container>
  );
};

export default LaudoForm;

LaudoForm.defaultProps = {
  laudo: null,
};
