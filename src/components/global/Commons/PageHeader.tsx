import React from "react";
import { Header, Image } from "semantic-ui-react";

export default function PageHeader(props: {
  title: string;
  iconPath: string;
  withRadius: boolean;
}) {
  return (
    <legend>
      <img
        className={props.withRadius ? "rounded" : "rounded-no-radius"}
        src={props.iconPath}
        style={{ marginRight: "5px" }}
      />
      {props.title}
    </legend>
  );
}

PageHeader.defaultProps = {
  withRadius: false,
};
