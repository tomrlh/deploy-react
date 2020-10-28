import React from "react";
import { Container, Message } from "semantic-ui-react";

export default function index() {
  return (
    <Container>
      <Message
        icon="info circle"
        header="O recurso informado não foi encontrado ou não existe"
        content=""
      />
    </Container>
  );
}
