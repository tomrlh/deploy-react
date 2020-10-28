import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "components/Login";
import ClienteRoutes from "./ClienteRoutes";
import AdminRoutes from "./AdminRoutes";
import ClassificadorRoutes from "./ClassificadorRoutes";
import SupervisorRoutes from "./SupervisorRoutes";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <AdminRoutes />

      <ClienteRoutes />

      <ClassificadorRoutes />

      <SupervisorRoutes />
    </>
  );
}
