import React, { useState, createContext } from "react";

// export const UsuarioFormContext = createContext<UsuarioFormData>(
//   {} as UsuarioFormData
// );

// const ClienteFormProvider = (props: { children: React.ReactNode }) => {
//   let respClientes: ResponsavelCliente[] = [];
//   const [responsaveisCliente, setResponsaveisCliente] = useState<
//     ResponsavelCliente[]
//   >(respClientes);

//   return (
//     <UsuarioFormContext.Provider
//       value={{ responsaveisCliente, setResponsaveisCliente }}
//     >
//       {props.children}
//     </UsuarioFormContext.Provider>
//   );
// };

// export default ClienteFormProvider;

const UsuarioFormContext = createContext({});

export default UsuarioFormContext;
