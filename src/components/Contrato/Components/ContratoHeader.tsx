import React from "react";
import { Header, Image } from "semantic-ui-react";

export default function ContratoHeader(props: { titulo: string }) {
  return (
    <Header as="h3">
      <Image
        src="/icons/contract/contract-128px.png"
        avatar
        size="large"
        style={{ marginLeft: "2px" }}
      />
      {props.titulo}
    </Header>
  );
}
