import React from "react";
import { Popup } from "semantic-ui-react";

export default function CustomPopup(props: { text: string; trigger: any }) {
  return (
    <Popup
      basic
      inverted
      content={props.text}
      trigger={props.trigger}
      size="mini"
    />
  );
}
