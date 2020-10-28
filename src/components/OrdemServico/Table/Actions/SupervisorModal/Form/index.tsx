import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getSupervisores } from "services/requests/Usuarios/Usuarios";
import { update } from "services/requests/OrdemServico/OrdemServico";
import { Usuario } from "services/types/Usuario";
import { OrdemServico, IOrdemServico } from "services/types/OrdemServico";
import { Form, Icon } from "semantic-ui-react";
import { notyfSuccess } from "utils/notifications";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";

type Opcoes = {
  id: string;
  valor: any;
  nome: string;
};

export interface Props {
  os: OrdemServico;
}

export default function SupervisorForm() {
  const { register, handleSubmit, errors, setValue } = useForm();

  const { selectedOrdemServico, setSelectedOrdemServico } = useContext(
    OrdemServicoContext
  );
  const [loadedSupervisores, setLoadedSupervisores] = useState<Usuario[]>([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState<Usuario>(
    {} as Usuario
  );

  const loadSupervisores = async () => {
    let newSupervisores = await getSupervisores();
    setLoadedSupervisores(newSupervisores);
  };

  // const filterSupervisores = () => {
  //   let filteredSupervisores: Usuario[] = [];
  //   selectedOrdemServico.supervisores.forEach((supervisor) => {
  //     let result = selectedOrdemServico.supervisores.filter(
  //       (osSupervisor) => osSupervisor.id === supervisor.id
  //     );
  //     if (result.length == 0) filteredSupervisores.push(supervisor);
  //   });
  //   return filteredSupervisores;
  // };

  const onSubmit = async (data: { [x: string]: any }) => {
    let updated = await update(selectedOrdemServico.id.toString(), {
      supervisorId: Number(data.supervisorId),
    } as IOrdemServico);

    if (!updated.error) notyfSuccess("Supervisor vinculado");
    console.log("SELECIONADO", selectedSupervisor, selectedOrdemServico);

    let alreadyExists = null;

    if (selectedOrdemServico.supervisores) {
      alreadyExists = selectedOrdemServico.supervisores.find(
        (s) => s.id === selectedSupervisor.id
      );
    }
    if (!alreadyExists) {
      console.log("AAAAAAAA", selectedOrdemServico);
      selectedOrdemServico.supervisores = [];
      selectedOrdemServico.supervisores.push(selectedSupervisor);
      setSelectedOrdemServico([]);
      setSelectedOrdemServico([]);
      setSelectedOrdemServico(selectedOrdemServico);
    }
  };

  useEffect(() => {
    /*eslint-disable */
    loadSupervisores();
    console.log(selectedOrdemServico.supervisores);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ValidableSelectField
          nomeCampo="supervisorId"
          nomeExibido="Adicionar Supervisor"
          opcoes={loadedSupervisores ? loadedSupervisores : []}
          register={register}
          errors={errors}
          setValue={setValue}
          updateSelectedOption={setSelectedSupervisor}
        />

        <button type="submit" className="ui button green">
          <Icon name="pin" />
          Vincular
        </button>
      </Form>
    </>
  );
}
