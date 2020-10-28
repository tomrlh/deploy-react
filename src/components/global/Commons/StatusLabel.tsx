import React from "react";
import { Label } from "semantic-ui-react";
import Badge from "./Badge";

const StatusLabel = (props: { text: string }) => {
  const findColor = (text: string) => {
    switch (text) {
      case "EM ABERTO":
        return "badge-warning";
      case "EM ANDAMENTO":
        return "badge-info";
      case "FINALIZADA":
        return "badge-success";
      default:
        return "badge-secondary";
    }
  };

  return <Badge color={findColor(props.text)} text={props.text} />;
};

export default StatusLabel;
