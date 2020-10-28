import React, { useState, useEffect } from "react";
import { Header, Image, Form } from "semantic-ui-react";
import { ItemOSFieldsAPI, ItemOSFieldsNames } from "services/types/ItemOS";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

export default function GraoFields(props: {
  nomeProduto: string;
  nomeTeste: string;
  nomeTolerancia: string;
  imagePath: string;
  idSim: string;
  idNao: string;
  idPadraoDefault: string;
  idPadraoOutro: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  register: Function;
}) {
  const [teste, setTeste] = useState("");
  const [tolerancia, setTolerancia] = useState("");
  const [isOutraTolerancia, setIsOutraTolerancia] = useState(false);

  useEffect(() => {
    props.register({ name: "produtoTeste" }, { required: true });
    props.register({ name: "produtoTolerancia" }, { required: true });
  }, []);

  return (
    <div>
      <Header as="h4">
        {props.nomeProduto}
        <Image
          src={props.imagePath}
          avatar
          size="mini"
          style={{ marginLeft: "2px" }}
        />
      </Header>
      <div className="flex-form-group">
        <label>{props.nomeTeste}</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={props.idSim}
            name={`${ItemOSFieldsAPI.PRODUTO_TESTE}- ${props.nomeTeste}`}
            value={props.nomeTeste}
            checked={teste === props.nomeTeste}
            onClick={() => {
              setTeste(props.nomeTeste);
              props.setValue("produtoTeste", props.nomeTeste);
            }}
          />
          <label className="form-check-label" htmlFor={props.idSim}>
            Sim
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={props.idNao}
            name={`${ItemOSFieldsAPI.PRODUTO_TESTE}- ${props.nomeTeste}`}
            value="Nenhum"
            checked={teste === "nenhum"}
            onClick={() => {
              setTeste("nenhum");
              props.setValue("produtoTeste", "nenhum");
            }}
          />
          <label className="form-check-label" htmlFor={props.idNao}>
            Não
          </label>
        </div>
      </div>

      <div className="flex-form-group">
        <label>{ItemOSFieldsNames.PRODUTO_TOLERANCIA}</label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={props.idPadraoDefault}
            name={`${ItemOSFieldsAPI.PRODUTO_TOLERANCIA}- ${props.nomeTolerancia}`}
            value={props.nomeTolerancia}
            checked={tolerancia === props.nomeTolerancia}
            onClick={(e) => {
              setTolerancia("none");
              setTolerancia(props.nomeTolerancia);
              setIsOutraTolerancia(false);
              props.setValue("produtoTolerancia", props.nomeTolerancia);
            }}
          />
          <label className="form-check-label" htmlFor={props.idPadraoDefault}>
            {props.nomeTolerancia}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={props.idPadraoOutro}
            name={`${ItemOSFieldsAPI.PRODUTO_TOLERANCIA}- ${props.nomeTolerancia}`}
            value={tolerancia}
            checked={tolerancia === ""}
            onClick={(e) => {
              setTolerancia("none");
              setTolerancia("");
              setIsOutraTolerancia(true);
              props.setValue("produtoTolerancia", "");
            }}
          />
          <label className="form-check-label" htmlFor={props.idPadraoOutro}>
            Outra
          </label>
        </div>
      </div>

      <div className="flex-form-group">
        <label>Outra tolerância</label>
        <textarea
          disabled={!isOutraTolerancia}
          className="form-control"
          rows={3}
          onChange={(e) => {
            setTolerancia(e.target.value as string);
            props.setValue("produtoTolerancia", e.target.value);
          }}
        />
      </div>
    </div>
  );
}
