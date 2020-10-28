import React, { useContext } from "react";
import { AuthContext } from "store/contexts/AuthContext";

const RenderRightSide = () => {
  const { loggedUser, setLoggedUser } = useContext(AuthContext);

  const signOut = () => {
    setLoggedUser(null);
    localStorage.clear();
  };

  return (
    <ul className="nav navbar-nav my-2 my-lg-0 justify-content-end">
      <li className="nav-item increase-font">
        <a
          className="nav-link black-text-color"
          href="http://localhost:3000"
          onClick={() => signOut()}
        >
          {loggedUser.nome}{" "}
          {loggedUser.roles && loggedUser.roles[0]
            ? " - " + loggedUser.roles[0].slug
            : ""}
        </a>
      </li>
    </ul>
  );
};

export default RenderRightSide;

RenderRightSide.defaultProps = {
  icon: "",
  withIcon: true,
};
