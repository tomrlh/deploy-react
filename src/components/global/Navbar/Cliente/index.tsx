import React, { useContext } from "react";
import { Image, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { ContratoNav } from "routes/navigation/contrato";
import { OrdemServicoNav } from "routes/navigation/ordemservico";
import { AuthContext } from "store/contexts/AuthContext";
import Navbar from "../index";
import "NewNavbar.css";
import RenderItem from "../RenderItem";

const NavbarCliente = () => {
  const AdminOptions = (
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <RenderItem
          title="Meus Contratos"
          icon="file outline"
          path={ContratoNav.CONSULTAR}
        />
        {/* 
        <RenderItem
          title="Ordens de Serviço"
          icon="call"
          path={OrdemServicoNav.CONSULTAR}
        /> */}
      </ul>
    </div>
  );

  return <Navbar options={AdminOptions} />;
};

export default NavbarCliente;

const classes = {
  logo: {
    marginRight: "1.5em",
  },
  bar: {
    backgroundColor: "#45c449",
  },
};
