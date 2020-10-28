import LaudoTable from "components/Laudo/Table";
import React, { useContext, useEffect } from "react";
import { LaudoContext } from "store/contexts/LaudoContext";

export default function LaudosPage() {
  const { laudos, setLaudos } = useContext(LaudoContext);

  return (
    <div>
      <LaudoTable laudos={laudos} />
    </div>
  );
}
