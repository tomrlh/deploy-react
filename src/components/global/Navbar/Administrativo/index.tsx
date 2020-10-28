import React from "react";
import { ContratoNav } from "routes/navigation/contrato";
import { ClienteNav } from "routes/navigation/cliente";
import { UsuarioNav } from "routes/navigation/usuario";
import { RegiaoNav } from "routes/navigation/regiao";
import Navbar from "../index";
import "NewNavbar.css";
import RenderDropdown from "../RenderDropdown";
import RenderItem from "../RenderItem";
import { PontoEmbarqueNav } from "routes/navigation/ponto-embarque";

const NavbarAdministrativo = () => {
  const AdminOptions = (
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <RenderItem title="Home" withIcon={false} path={UsuarioNav.CADASTRAR} />

        <RenderDropdown
          title="Clientes"
          icon="user outline"
          itens={[
            { title: "Consultar", icon: "search", path: ClienteNav.CONSULTAR },
            { title: "Cadastrar", icon: "add", path: ClienteNav.CADASTRAR },
          ]}
        />

        <RenderDropdown
          title="Contratos"
          icon="file outline"
          itens={[
            { title: "Consultar", icon: "search", path: ContratoNav.CONSULTAR },
            { title: "Cadastrar", icon: "add", path: ContratoNav.CADASTRAR },
          ]}
        />

        <RenderDropdown
          title="Usuários"
          icon="user circle outline"
          itens={[
            { title: "Consultar", icon: "search", path: UsuarioNav.CONSULTAR },
            { title: "Cadastrar", icon: "add", path: UsuarioNav.CADASTRAR },
          ]}
        />

        <RenderItem title="Regiões" icon="sitemap" path={RegiaoNav.CONSULTAR} />

        <RenderItem
          title="Contas à Receber"
          icon="search"
          path="contas-receber"
        />

        <RenderItem
          title="Pontos de Embarque"
          icon="search"
          path={PontoEmbarqueNav.CONSULTAR}
        />
      </ul>
    </div>
  );

  return <Navbar options={AdminOptions} />;
};

export default NavbarAdministrativo;
