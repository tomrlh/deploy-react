import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import UsuariosTable from "components/Usuario/Table";
import { Usuario } from "services/types/Usuario";
import * as Usuarios from "services/requests/Usuarios/Usuarios";

const ClienteOrdemServicoPage = () => {
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);
  const [recarregarUsuarios, setRecarregarUsuarios] = useState(false);

  useEffect(() => {
    const getUsuarios = async () => {
      //let usuariosPaginated: Pagination<Usuario> = await Usuarios.get();
      //setPaginationControls(usuariosPaginated.meta);
      let usuariosResponse: Usuario[] = await Usuarios.get();
      setUsuarios(usuariosResponse);
    };
    getUsuarios();

    if (recarregarUsuarios) {
      getUsuarios();
      return;
    }
  }, [recarregarUsuarios]);

  return (
    <Container>
      <UsuariosTable
        usuarios={usuarios}
        setRecarregarUsuarios={setRecarregarUsuarios}
      />
    </Container>
  );
};

export default ClienteOrdemServicoPage;
