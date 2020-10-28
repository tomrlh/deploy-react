import React, { useContext } from "react";
import { AuthContext } from "store/contexts/AuthContext";
import Navbar from "../index";
import "NewNavbar.css";
import RenderItem from "../RenderItem";
import { OrdemServicoNav } from "routes/navigation/ordemservico";

const NavbarSupervisor = () => {
  const AdminOptions = (
    <>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <RenderItem
            title="Itens de O.S."
            icon="search"
            path={OrdemServicoNav.CONSULTAR}
          />
        </ul>
      </div>
    </>
  );

  return <Navbar options={AdminOptions} />;
};

export default NavbarSupervisor;
