import React from "react";
import Navbar from "../index";
import "NewNavbar.css";
import { ItemOSNav } from "routes/navigation/itemos";
import RenderItem from "../RenderItem";

const NavbarClassificador = () => {
  const AdminOptions = (
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <RenderItem
          title="Itens de OS"
          icon="search"
          path={ItemOSNav.CONSULTAR}
        />
      </ul>
    </div>
  );

  return <Navbar options={AdminOptions} />;
};

export default NavbarClassificador;

const classes = {
  logo: {
    marginRight: "1.5em",
  },
  bar: {
    backgroundColor: "#45c449",
  },
};
