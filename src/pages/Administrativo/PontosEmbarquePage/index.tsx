import React, { useEffect, useState } from "react";
import * as PontoEmbarqueReq from "services/requests//PontoEmbarque/PontoEmbarque";
import PontosMapa from "components/PontoEmbarque/View/Components/PontosMapa";
import { PontoEmbarque } from "services/types/PontoEmbarque";

export default function PontosEmbarquePage() {
  const [pontosEmbarque, setPontosEmbarque] = useState([] as PontoEmbarque[]);

  const getPontosEmbarque = async () => {
    let pontosEmbarque: PontoEmbarque[] = await PontoEmbarqueReq.get();
    console.log("NOVOS PONTOS", pontosEmbarque);
    setPontosEmbarque(pontosEmbarque);
  };

  useEffect(() => {
    getPontosEmbarque();
  });

  return (
    <div>
      <PontosMapa pontosEmbarque={pontosEmbarque} />
    </div>
  );
}
