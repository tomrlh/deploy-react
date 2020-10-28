import React, { useState, useEffect, createContext } from "react";
import { Usuario } from "services/types/Usuario";
import { login as loginReq } from "../../services/requests/Login/Login";

interface LoginContextData {
  loggedUser: Usuario;
  setLoggedUser: Function;
  signIn: Function;
}

export const AuthContext = createContext<LoginContextData>(
  {} as LoginContextData
);

const AuthProvider = (props: { children: React.ReactNode }) => {
  const [loggedUser, setLoggedUser] = useState<any>({});

  const signIn = async (username: string, password: string) => {
    const response = await loginReq({ username, password });
    console.log("response in AuthContext", response);
    let status: string = response.status;
    if (String(status) !== "ok") {
      // return "Usuário ou senha incorretos"
      console.log(response);
      return response;
    }

    localStorage.clear();
    setLoggedUser(response.user);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", response.token);
    return response;
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedUser = localStorage.getItem("user");
      const storagedToken = localStorage.getItem("token");

      if (storagedUser && storagedToken) {
        setLoggedUser(JSON.parse(storagedUser));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
