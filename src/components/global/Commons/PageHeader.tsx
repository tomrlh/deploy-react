import React from "react";

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
        alt={props.title}
      />
      {props.title}
    </legend>
  );
}

PageHeader.defaultProps = {
  withRadius: false,
};
