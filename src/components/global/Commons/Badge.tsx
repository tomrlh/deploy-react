import React from "react";

type Props = {
  color:
    | "badge-primary"
    | "badge-secondary"
    | "badge-success"
    | "badge-danger"
    | "badge-warning"
    | "badge-info"
    | "badge-light"
    | "badge-dark";
  text: string;
};

export default function Badge(props: Props) {
  return <span className={"badge " + props.color}>{props.text}</span>;
}
