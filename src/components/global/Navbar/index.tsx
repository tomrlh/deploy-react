import React, { Component, useContext, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Icon,
  Image,
  Menu,
} from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { ContratoNav } from "routes/navigation/contrato";
import { ClienteNav } from "routes/navigation/cliente";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import { AuthContext } from "store/contexts/AuthContext";
import RenderRightSide from "./RenderRightSide";
import { Footer } from "../Footer";

const FixedMenuLayout = (props: { options: any }) => {
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState({
    display: "none",
  });

  return (
    <nav className="navbar navbar-expand-lg bg-success" style={classes.bar}>
      <a className="navbar-brand" href="#">
        <Image size="mini" src="/images/logo.png" style={classes.logo} />
      </a>

      {props.options}

      <RenderRightSide />

      <button
        className="navbar-toggler navbar-dark"
        type="button"
        style={classes.textColor}
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={classes.textColor}></span>
      </button>
    </nav>
  );
};

export default FixedMenuLayout;

const classes = {
  logo: {
    marginRight: "1.5em",
  },
  bar: {
    // backgroundColor: "#45c449",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,210,19,1) 0%, rgba(0,255,212,1) 100%)",
    borderWidth: "0 0 4px 0",
    borderBottomColor: "#28b62c",
    marginBottom: "20px",
  },
  textColor: {
    /* LUMEN success color */
    backgroundColor: "#28b62c",
  },
};
