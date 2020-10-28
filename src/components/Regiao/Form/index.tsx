import React, { useContext, useState } from "react";
import { Input } from "semantic-ui-react";
import * as Regioes from "services/requests/Regioes";
import { IRegiao, Regiao } from "services/types/Regiao";
import { RegiaoContext } from "store/contexts/RegiaoContext";

const RegioesForm = () => {
  const { regioes, setRegioes } = useContext(RegiaoContext);
  const [nomeRegiao, setNomeRegiao] = useState("");

  const handleChange = (e: any, data: { value: string }) => {
    setNomeRegiao(data.value);
  };

  const saveRegiao = async () => {
    let regiaoSaved = await Regioes.post({ nome: nomeRegiao } as IRegiao);
    regioes.push((regiaoSaved as unknown) as Regiao);
    console.log(regiaoSaved, (regiaoSaved as unknown) as Regiao, regioes);
    setRegioes([]);
    setRegioes([]);
    setRegioes(regioes);
  };

  return (
    <div className="flex-form-group">
      <Input value={nomeRegiao} onChange={handleChange} />
      <button
        disabled={!nomeRegiao || nomeRegiao.length <= 0 ? true : false}
        className="ui button icon mini gradient-green"
        onClick={saveRegiao}
      >
        Adicionar Região
      </button>
    </div>
  );
};

export default RegioesForm;
