import ValidableSelectField from "components/global/Inputs/ValidableSelectField";
import React, { useState } from "react";
import { FieldError } from "react-hook-form";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { Form } from "semantic-ui-react";
import { ItemOS } from "services/types/ItemOS";
import { update } from "services/requests/ItemOS";
import { notyfSuccess } from "utils/notifications";

type Props = {
  itemOS: ItemOS;
};

export default function StatusItemForm(props: Props) {
  const [currentValue, setCurrentValue] = useState("");

  const options = () => {
    return [
      { key: "1", value: "Não Iniciada", text: "Não Iniciada" },
      { key: "2", value: "Finalizada", text: "Finalizada" },
      { key: "3", value: "Bloqueada", text: "Bloqueada" },
    ];
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = () => {
    console.log("currentValue", currentValue);
    console.log(currentValue);
    const newItem = props.itemOS;
    newItem.status = currentValue;
    const response = update(props.itemOS.id.toString(), newItem);
    notyfSuccess("Item atualizado");
    console.log(response);
  };

  return (
    <form>
      <div className="form-group flex-field">
        <label>Atualizar Status</label>

        <select
          className="form-control is-invalid"
          value={currentValue}
          onChange={handleChange}
        >
          <option value="" className="item">
            Selecione
          </option>

          {options().map((opcao, index) => (
            <option
              key={opcao.key + "-" + index}
              value={opcao.value}
              className="item"
            >
              {opcao.text}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="btn btn-success"
        onClick={() => onSubmit()}
      >
        <i className="pin icon" />
        Vincular
      </button>
    </form>
  );
}
