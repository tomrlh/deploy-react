export enum ProfilesPrefix {
  DIRETOR = "diretor",
  ADMINISTRADOR = "administrador",
  GERENTE_ESTADUAL = "gerente-estadual",
  SUPERVISOR_REGIONAL = "supervisor-regional",
  SUPERVISOR_BASE = "supervisor-base",
  CLASSIFICADOR = "classificador",
  CLIENTE = "cliente",
}

const identifyProfileRoute = (mainRole: string) => {
  if (mainRole === "diretor") return ["administrador"];

  let roles = Object.values(ProfilesPrefix);
  let matchedRoles = roles.filter((role) => mainRole === role);
  return matchedRoles[0];
};

export default identifyProfileRoute;
