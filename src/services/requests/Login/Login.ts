import { axiosInstance as axios, LoginResponseType } from "../globals";

export type User = {
  username: string;
  password: string;
};

export const login = async (user: User): Promise<LoginResponseType> => {
  let res: LoginResponseType = await axios
    .post("token", user)
    .then((response) => {
      console.log("RESPONSE", response);
      return response.data;
    })
    .catch((error) => "Usuário ou senha incorretos"); // não consegui pegar a resposta direta da API
  console.log("asd", res);

  return res;
};

export const loggedUserInfo = async (email: string): Promise<any> => {
  let res: any = await axios
    .get("user-info")
    .then((response) => response.data)
    .catch((error) => error);

  return res;
};

export const callGetLoggedUser = async (setLoggedUser: Function) => {
  let newLoggedUser = await loggedUserInfo(
    localStorage.getItem("email") as string
  );
  setLoggedUser(newLoggedUser);
};
