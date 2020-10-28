import React from "react";
import "./App.css";
import MyRoutes from "routes/RoutesByProfile";
import AuthProvider from "store/contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
