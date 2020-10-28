import React, { useContext, useEffect, useState } from "react";
import { Icon, Message } from "semantic-ui-react";
import { Cidade, Regiao } from "services/types/Regiao";
import { Meta } from "services/types/Adonis/Meta";
import PageHeader from "components/global/Commons/PageHeader";
import AdicionarModal from "./Actions/AdicionarModal";
import * as Regioes from "services/requests/Regioes";
import { divide } from "lodash";
import RegioesForm from "../Form";
import { RegiaoContext } from "store/contexts/RegiaoContext";

type Props = {
  regioes: Regiao[];
  paginationControls: Meta;
};

const RegioesTable = (props: Props) => {
  const { regioes, setRegioes } = useContext(RegiaoContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  const deleteCidadeFromRegiao = async (regiaoId: number, cidadeId: number) => {
    let response = await Regioes.destroyCity(regiaoId, cidadeId);
    let regiaoToUpdate = regioes.find(
      (regiao) => regiao.id === regiaoId
    ) as Regiao;
    let idx = regioes.indexOf(regiaoToUpdate as Regiao);
    let cidadesUpdated = regioes
      .find((regiao) => regiao.id === regiaoId)
      ?.cidades.filter((cidade) => cidade.id !== cidadeId);
    regiaoToUpdate.cidades = cidadesUpdated as Cidade[];

    regioes[idx] = regiaoToUpdate;

    console.log(regioes);
    setRegioes([]);
    setRegioes([]);
    setRegioes(regioes);
  };

  const deleteRegiao = async (id: number) => {
    let response = await Regioes.destroy(id);
    setRegioes(regioes.filter((regiao) => regiao.id !== id));
  };

  useEffect(() => {
    setRegioes(props.regioes);
  }, [props, props.regioes]);

  return (
    <div>
      <PageHeader title="Regiões" iconPath="/icons/region/region-128px.png" />

      <RegioesForm />

      {regioes.length > 0 ? (
        <>
          {regioes.map((regiao) => (
            <div className="ui middle celled aligned unordered divided list">
              <div className="item">
                <div style={styles.regiaoHeader}>
                  <h4>
                    {regiao.nome}
                    <br />
                    <i>
                      {regiao.usuario
                        ? "Supervisor Regional: " + regiao.usuario.nome
                        : ""}
                    </i>
                  </h4>

                  <div>
                    <AdicionarModal regiao={regiao} />
                    {regiao.cidades && regiao.cidades.length <= 0 && (
                      <button
                        className="ui button icon mini gradient-red"
                        onClick={() => {
                          deleteRegiao(regiao.id);
                        }}
                      >
                        <Icon name="close" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="list unordered">
                  {regiao.cidades.map((cidade) => (
                    <div className="item" style={styles.cidadeListItem}>
                      <p>
                        {cidade.nome}-{cidade.estado.uf}
                      </p>
                      <p>
                        <Icon
                          style={isHovering ? styles.closeCidadeButton : {}}
                          name="close"
                          color="red"
                          onMouseEnter={handleHover}
                          onMouseLeave={handleHover}
                          onClick={() => {
                            deleteCidadeFromRegiao(regiao.id, cidade.id);
                          }}
                        />
                      </p>
                    </div>
                  ))}
                  {regiao.cidades && regiao.cidades.length <= 0 && (
                    <p>Sem cidades cadastradas</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Message>
          <p>Sem regiões cadastradas</p>
        </Message>
      )}
    </div>
  );
};

export default RegioesTable;

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
