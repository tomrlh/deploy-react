import React from "react";
import { Label } from "semantic-ui-react";
import { Usuario } from "services/types/Usuario";

const SupervisorLabel = (props: { usuario: Usuario }) => {
  return <Label style={styles.margin}>{props.usuario.nome}</Label>;
};

export default SupervisorLabel;

const styles = {
  margin: {
    marginBottom: "5px",
  },
};
