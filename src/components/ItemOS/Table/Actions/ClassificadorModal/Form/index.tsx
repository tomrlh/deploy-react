import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getClassificadores } from "services/requests/Usuarios/Usuarios";
import { update } from "services/requests/ItemOS";
import { Usuario } from "services/types/Usuario";
import { OrdemServico, IOrdemServico } from "services/types/OrdemServico";
import { Form, Icon } from "semantic-ui-react";
import { notyfError, notyfSuccess, notyfWarn } from "utils/notifications";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";
import { ItemOS } from "services/types/ItemOS";
import ClassificadoresList from "../List";

type Opcoes = {
  id: string;
  valor: any;
  nome: string;
};

export default function ClassificadorForm(props: { selectedItemOS: ItemOS }) {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    reset,
  } = useForm();

  const {
    selectedOrdemServico,
    setSelectedOrdemServico,
    loadedClassificadores,
    setLoadedClassificadores,
  } = useContext(OrdemServicoContext);

  const [selectedClassificador, setSelectedClassificador] = useState<Usuario>(
    {} as Usuario
  );

  const loadClassificadores = async () => {
    if (!loadedClassificadores || loadedClassificadores.length == 0) {
      let newClassificadores = await getClassificadores();
      setLoadedClassificadores(newClassificadores);
    }
  };

  const onSubmit = async (data: { [x: string]: any }) => {
    let updated = await update(props.selectedItemOS.id.toString(), {
      classificadorId: Number(data.classificadorId),
    } as ItemOS);
    console.log(updated.status);
    if (updated.status === 200 || updated.status === 201) {
      notyfSuccess("Classificador vinculado");

      let itemToUpdate = selectedOrdemServico.itens.find(
        (item) => item.id === props.selectedItemOS.id
      );
      if (itemToUpdate) {
        let index = selectedOrdemServico.itens.indexOf(itemToUpdate);
        itemToUpdate.classificadores = [selectedClassificador];
        let newSelectedOrdemServico = selectedOrdemServico;
        newSelectedOrdemServico.itens[index] = itemToUpdate;
        setSelectedOrdemServico({});
        setSelectedOrdemServico(newSelectedOrdemServico);
      }
    } else {
      notyfWarn(updated.data);
    }
  };

  useEffect(() => {
    loadClassificadores();
    console.log(selectedOrdemServico.supervisores, props.selectedItemOS.id);
  }, []);

  return (
    <>
      <ClassificadoresList selectedItemOS={props.selectedItemOS} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <ValidableSelectField
          nomeCampo="classificadorId"
          nomeExibido="Classificador"
          opcoes={loadedClassificadores ? loadedClassificadores : []}
          register={register}
          errors={errors}
          setValue={setValue}
          updateSelectedOption={setSelectedClassificador}
        />

        <button type="submit" className="btn btn-success">
          <Icon name="pin" />
          Vincular
        </button>
      </Form>
    </>
  );
}
