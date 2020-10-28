import React from "react";
import { Link } from "react-router-dom";

const RenderDropdown = (props: {
  title: string;
  icon: string;
  itens: { title: string; icon: string; path: string }[];
}) => {
  return (
    <li className="nav-item increase-font dropdown">
      <a
        className="nav-link black-text-color dropdown-toggle"
        data-toggle="dropdown"
        href="/#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className={`${props.icon} icon`}></i> {props.title}
      </a>
      <div className="dropdown-menu">
        {props.itens.map((item, idx) => (
          <Link
            key={`${item.path}-${idx}`}
            className="dropdown-item increase-font"
            to={item.path}
          >
            <i className={`${item.icon} icon`}></i>
            {item.title}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default RenderDropdown;
