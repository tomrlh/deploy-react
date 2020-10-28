import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import {
  IUsuario,
  Usuario,
  UsuarioFieldsAPI,
  UsuarioFieldsNames,
} from "services/types/Usuario";
import { get } from "services/requests/Perfis";
import { post, update } from "services/requests/Usuarios/Usuarios";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import * as functions from "./functions";

// import UsuarioFormProvider from "state/contexts/UsuarioFormContext";
// import { UsuarioFormContext } from "state/contexts/UsuarioFormContext";
import { Notyf, NotyfEvent } from "notyf";
import ValidableField from "components/global/Inputs/ValidableField";
import ValidableInputMasked from "components/global/Inputs/ValidableInputMasked";
import ValidableEmailField from "components/global/Inputs/ValidableEmailField";
import { UsuarioNav } from "routes/navigation/usuario";
import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import EstadosCidades from "components/global/Inputs/EstadosCidades";
import PageHeader from "components/global/Commons/PageHeader";
import { Perfil } from "services/types/Perfil";
import Estados from "components/global/Inputs/EstadosCidades/Estados";
import { RegiaoContext } from "store/contexts/RegiaoContext";
import { Regiao } from "services/types/Regiao";
import * as RegioesReq from "services/requests/Regioes";
import { get as getEstadosReq } from "services/requests/Estados";

type Estado = {
  id: string;
  nome: string;
};

const UsuarioForm = () => {
  const { regioes, setRegioes } = useContext(RegiaoContext);
  const [estados, setEstados] = useState<Estado[]>([]);
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false);
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [perfilSelecionado, setPerfilSelecionado] = useState<Perfil>(
    {} as Perfil
  );
  const [perfis, setPerfis] = useState<Perfil[]>([] as Perfil[]);
  const [wasReset, setWasReset] = useState<boolean>(false);

  const [cidadesSelecionadas, setCidadesSelecionadas] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  const { register, handleSubmit, errors, setValue, reset } = useForm();
  const { id } = useParams();

  const onSubmit = async (data: { [x: string]: any }) => {
    let response: any = null;
    functions.normalizeFormData(data);
    data[UsuarioFieldsAPI.PERFIS_ID] = [perfilSelecionado.id];

    /// REFATORAR
    if (cidadesSelecionadas && cidadesSelecionadas.length > 0)
      data.alocacaoFuncionarioCampoIds = cidadesSelecionadas;

    if (estadoSelecionado && estadoSelecionado.length > 0)
      data.alocacaoGerenciaId = Number(estadoSelecionado);
    console.log("ESTADO SELECTED", estadoSelecionado, data as Usuario, data);

    if (id) {
      response = await update(id, data as Usuario);
    } else {
      response = await post(data as Usuario);
      //   let usuarioResponse = await postClientUser(
      //     data.cnpj + "@email.com",
      //     "123@mudar",
      //     [6]
      //   );
      //   console.log(usuarioResponse);
    }

    let resultWasOk = functions.showUsuarioStatus(
      response,
      id,
      redirectUsuarios
    );
    if (resultWasOk) {
      reset();
      setWasReset(true);
    }
  };

  const redirectUsuarios = (message: string) => {
    // can't usue NAVIGATE from react router dom from a not React class or hook
    const notification = new Notyf().success({
      message: message,
      position: {
        x: "center",
        y: "bottom",
      },
      duration: 4000,
      dismissible: true,
    });
    notification.on(NotyfEvent.Click, () =>
      navigate("../../" + UsuarioNav.CONSULTAR, { replace: true })
    );
  };

  useEffect(() => {
    const chamaPreencherUsuario = async () => {
      let usuarioCarregado = await functions.preencheUsuario(id, setValue);
      if (usuarioCarregado) {
        setUsuario(usuarioCarregado); // aparentemente não é necessário
      }
    };

    if (!editando) {
      setEditando(true);
      chamaPreencherUsuario();
    }

    const getPerfis = async () => {
      let perfisResponse: Perfil[] = await get();
      setPerfis(perfisResponse);
    };
    getPerfis();

    const getRegioes = async () => {
      let newRegioes: Regiao[] = await RegioesReq.get();
      setRegioes(newRegioes);
    };
    getRegioes();

    const getEstados = async () => {
      let newEstados = await getEstadosReq();
      setEstados(newEstados);
    };
    getEstados();
  }, []);

  return (
    <div className="container">
      <PageHeader
        title={!id ? "Novo Usuário" : "Atualizar Usuário"}
        iconPath="/icons/employee/employee-128px.png"
        withRadius
      />

      <form>
        <fieldset>
          <div className="flex-form-group">
            <ValidableField
              nomeCampo={UsuarioFieldsAPI.NOME}
              nomeExibido={UsuarioFieldsNames.NOME}
              errors={errors}
              register={register}
            />

            <ValidableField
              nomeCampo={UsuarioFieldsAPI.USERNAME}
              nomeExibido={UsuarioFieldsNames.USERNAME}
              errors={errors}
              register={register}
            />

            <ValidableField
              nomeCampo={UsuarioFieldsAPI.PASSWORD}
              nomeExibido={UsuarioFieldsNames.PASSWORD}
              password={true}
              errors={errors}
              register={register}
            />
            <div className="field">
              <label>Confirmar Senha</label>
              <Input placeholder="Confirme a senha" type="password" />
            </div>
          </div>

          <div className="flex-form-group">
            <ValidableInputMasked
              mask="999.999.999-99"
              fieldName={UsuarioFieldsAPI.CPF}
              displayName={UsuarioFieldsNames.CPF}
              errors={errors}
              setValue={setValue}
              register={register}
            />

            <ValidableField
              nomeCampo={UsuarioFieldsAPI.RG}
              nomeExibido={UsuarioFieldsNames.RG}
              errors={errors}
              register={register}
            />
          </div>

          <div className="flex-form-group">
            <ValidableEmailField
              nomeCampo={UsuarioFieldsAPI.EMAIL}
              nomeExibido={UsuarioFieldsNames.EMAIL}
              errors={errors}
              register={register}
            />

            <ValidableInputMasked
              mask="(99) 99999-9999"
              fieldName={UsuarioFieldsAPI.TELEFONE}
              displayName={UsuarioFieldsNames.TELEFONE}
              errors={errors}
              setValue={setValue}
              register={register}
            />
          </div>

          <ValidableSelectField
            nomeCampo={UsuarioFieldsAPI.PERFIS_ID}
            nomeExibido="Perfil"
            errors={errors}
            register={register}
            setValue={setValue}
            wasReset={wasReset}
            opcoes={perfis}
            updateSelectedOption={setPerfilSelecionado}
          />

          {(perfilSelecionado.slug === "classificador" ||
            perfilSelecionado.slug === "supervisor-base") && (
            <>
              <h4>Alocação</h4>
              <EstadosCidades
                nomeEstado="estado"
                nomeEstadoExibido="Estado"
                nomeCidade={UsuarioFieldsAPI.ALOCACAO_CAMPO_ID}
                nomeCidadeExibido="Cidade"
                errors={errors}
                register={register}
                setValue={setValue}
                wasReset={wasReset}
                isMultipleCidades={true}
                required={false}
                updateSelectedOption={setCidadesSelecionadas}
              />
            </>
          )}

          {(perfilSelecionado.slug === "gerente-estadual" ||
            perfilSelecionado.slug === "administrador") && (
            <>
              <h4>Alocação</h4>
              <ValidableSelectField
                nomeCampo={UsuarioFieldsAPI.ALOCACAO_GERENCIA_ID}
                nomeExibido="Estado"
                errors={errors}
                register={register}
                setValue={setValue}
                wasReset={wasReset}
                opcoes={estados}
                required={
                  perfilSelecionado.slug === "administrador" ? false : true
                }
              />
            </>
          )}

          {perfilSelecionado.slug === "supervisor-regional" && (
            <>
              <ValidableSelectField
                nomeCampo={UsuarioFieldsAPI.REGIAO_ID}
                nomeExibido={UsuarioFieldsNames.REGIAO}
                errors={errors}
                register={register}
                setValue={setValue}
                wasReset={wasReset}
                opcoes={regioes}
              />
            </>
          )}

          <br />
          <div className="flex-form-group">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              <Icon name="add" />
              {!id ? "Cadastrar" : "Atualizar"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UsuarioForm;

// UsuarioForm.defaultProps = {
//   idUsuario: "",
// } as Partial<Props>;
