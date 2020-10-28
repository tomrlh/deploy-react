import React, { useState, useEffect } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import GraoFields from "./GraoFields";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

export interface Props {
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  register: Function; // vi necessidade em usar para setar o regex a ser validado,
  // pois usando somente a validação interna isMatching(value, regex) não integrava com
  // a validiação do react-hook-form
}

export default function ProdutoFields(props: Props) {
  const [isSoja, setIsSoja] = useState(false);

  useEffect(() => {
    setIsSoja(true);
    props.setValue("produtoNome", "Soja");
    props.register({ name: "produtoNome" }, { required: true });
  }, []);

  return (
    <div>
      <Form.Group inline>
        <label>Produto:</label>
        <Form.Radio
          label="Soja"
          value="Soja"
          checked={isSoja}
          onClick={() => {
            setIsSoja(true);
            props.setValue("produtoNome", "Soja");
            console.log("setou soja");
          }}
        />
        <Form.Radio
          label="Milho"
          value="Milho"
          checked={!isSoja}
          onClick={() => {
            setIsSoja(false);
            props.setValue("produtoNome", "Milho");
            console.log("setou milho");
          }}
        />
      </Form.Group>

      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Segment disabled={!isSoja}>
              <GraoFields
                nomeProduto="Soja"
                nomeTeste="Intacta"
                nomeTolerancia="IN 11"
                imagePath="/icons/soy/soy-24px.png"
                idSim="soja-sim"
                idNao="soja-nao"
                idPadraoDefault="soja-padrao"
                idPadraoOutro="soja-outro"
                errors={props.errors}
                setValue={props.setValue}
                register={props.register}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment disabled={isSoja}>
              <GraoFields
                nomeProduto="Milho"
                nomeTeste="Micotoxina"
                nomeTolerancia="IN 60"
                imagePath="/icons/corn/corn-24px.png"
                idSim="milho-sim"
                idNao="milho-nao"
                idPadraoDefault="milho-padrao"
                idPadraoOutro="milho-outro"
                errors={props.errors}
                setValue={props.setValue}
                register={props.register}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
