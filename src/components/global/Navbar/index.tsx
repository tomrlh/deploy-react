import React from "react";
import { Image } from "semantic-ui-react";
import RenderRightSide from "./RenderRightSide";

const FixedMenuLayout = (props: { options: any }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-success" style={classes.bar}>
      <a className="navbar-brand" href="/#">
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
