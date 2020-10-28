import LaudoTable from "components/Laudo/Table";
import React, { useContext } from "react";
import { LaudoContext } from "store/contexts/LaudoContext";

export default function LaudosPage() {
  const { laudos } = useContext(LaudoContext);

  return (
    <div>
      <LaudoTable laudos={laudos} />
    </div>
  );
}
