import React, { useContext, useEffect, useState } from "react";
import { Icon, Message } from "semantic-ui-react";
import PageHeader from "components/global/Commons/PageHeader";
import * as ItemOSReq from "services/requests/ItemOS";
import { ItemOS } from "services/types/ItemOS";
import { notyfSuccess } from "utils/notifications";
import { OrdemServicoContext } from "store/contexts/OrdemServicoContext";

type Props = {
  selectedItemOS: ItemOS;
};

const ClassificadoresList = (props: Props) => {
  const { selectedOrdemServico, setSelectedOrdemServico } = useContext(
    OrdemServicoContext
  );

  // const [localClassificadores, setLocalClassificadores] = useState<Usuario[]>(
  //   []
  // );
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  const deleteClassificador = async () => {
    let response = await ItemOSReq.removeClassificador(
      props.selectedItemOS.id.toString()
    );

    if (response.status === "OK") {
      notyfSuccess("Classificador desvinculado");

      let itemToUpdate = selectedOrdemServico.itens.find(
        (item) => item.id === props.selectedItemOS.id
      );
      console.log("TO UP", itemToUpdate);
      if (itemToUpdate) {
        console.log("if");
        let index = selectedOrdemServico.itens.indexOf(itemToUpdate);
        itemToUpdate.classificadores = [];
        console.log("updated", itemToUpdate.classificadores);
        let newSelectedOrdemServico = selectedOrdemServico;
        newSelectedOrdemServico.itens[index] = itemToUpdate;
        setSelectedOrdemServico({});
        setSelectedOrdemServico({});
        setSelectedOrdemServico(newSelectedOrdemServico);
      }
    }

    console.log(response);
  };

  useEffect(() => {
    // setLocalClassificadores(props.selectedItemOS.classificadores);
  }, [props, props.selectedItemOS.classificadores]);

  return (
    <div>
      <PageHeader title="Classificador" iconPath="/icons/region/region.png" />
      {props.selectedItemOS.classificadores.length > 0 ? (
        <>
          <div className="list unordered">
            {props.selectedItemOS.classificadores.map((classificador, idx) => (
              <div className="item" style={styles.cidadeListItem} key={idx}>
                <p>{classificador.nome}</p>
                <p>
                  <Icon
                    style={isHovering ? styles.closeCidadeButton : {}}
                    name="close"
                    color="red"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    onClick={deleteClassificador}
                  />
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Message>
          <p>Sem classificador vinculado</p>
        </Message>
      )}
    </div>
  );
};

export default ClassificadoresList;

const styles = {
  regiaoHeader: { display: "flex", justifyContent: "space-between" as const },
  cidadeListItem: {
    display: "flex",
    justifyContent: "space-between" as const,
    borderTop: "1px solid rgba(34,36,38,.15)",
  },
  closeCidadeButton: {
    cursor: "pointer",
  },
  regiaoButton: {
    alignSelf: "flex-end" as const,
  },
};
