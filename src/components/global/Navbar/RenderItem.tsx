import React from "react";
import { Link } from "react-router-dom";

const RenderItem = (props: {
  title: string;
  icon: string;
  path: string;
  withIcon: boolean;
}) => {
  return (
    <li className="nav-item increase-font">
      <Link className="nav-link black-text-color" to={props.path}>
        {props.withIcon && <i className={`${props.icon} icon`}></i>}
        {props.title}
      </Link>
    </li>
  );
};

export default RenderItem;

RenderItem.defaultProps = {
  icon: "",
  withIcon: true,
};
