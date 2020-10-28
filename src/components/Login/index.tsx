import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { CommonNav } from "routes/navigation/comum";
import { AuthContext } from "store/contexts/AuthContext";
import identifyProfileRoute from "routes/navigation/profiles";
import { notyfError } from "utils/notifications";

const LoginForm = () => {
  const [username, setUsername] = useState("diretor@username.com");
  const [password, setPassword] = useState("diretor");
  let navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const login = async () => {
    let response = await signIn(username, password);
    if (response.status === "ok") {
      let mainRole = response.user.roles[0].slug;
      console.log("response", response);
      console.log("ROLES", response.user.roles);
      let profileRoute = "/" + identifyProfileRoute(mainRole);
      navigate(CommonNav.HOME + profileRoute);
    } else notyfError(response);
  };

  return (
    <Grid style={classes.container} textAlign="center" verticalAlign="middle">
      <Grid.Column style={classes.form}>
        <Header as="h2" color="teal" textAlign="center">
          <Image style={classes.logo} src="/images/logo.png" size="massive" />
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large" onClick={login}>
              Entrar
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;

const classes = {
  container: {
    height: "100vh",
    backgroundImage: `url("/images/login-background.jpg")`,
  },
  form: {
    maxWidth: 450,
  },
  logo: {
    width: "10em",
  },
};
