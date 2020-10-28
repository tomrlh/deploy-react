import React, { useEffect } from "react";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import CustomLocale from "./CustomLocale";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

type Props = {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  wasReset: boolean;
};

function DateSelector(props: Props) {
  const [currentValue, setCurrentValue] = React.useState<DayValue>(null);

  const formatInputValue = (newDate: DayValue) => {
    if (!newDate) return "";

    let dayDigits =
      newDate.day.toString().length > 1
        ? newDate.day.toString()
        : "0" + newDate.day.toString();
    let monthDigits =
      newDate.month.toString().length > 1
        ? newDate.month.toString()
        : "0" + newDate.month.toString();

    let formattedValue = `${dayDigits}/${monthDigits}/${newDate.year}`;

    console.log(formattedValue, formattedValue.toString());
    return formattedValue.toString();
  };

  useEffect(() => {
    props.register({ name: props.nomeCampo }, { required: true });
    if (props.wasReset) setCurrentValue(null);
  }, [props.wasReset]);

  return (
    <div
      className={
        !props.errors[props.nomeCampo]
          ? "form-group flex-field"
          : "form-group flex-field has-danger"
      }
    >
      <label>{props.nomeExibido}</label>
      <DatePicker
        value={currentValue}
        inputName={props.nomeCampo}
        onChange={(e) => {
          setCurrentValue(e);
          let toSave = formatInputValue(e);
          props.setValue(props.nomeCampo, toSave);
        }}
        locale={CustomLocale}
        inputClassName={
          props.errors[props.nomeCampo]
            ? "form-control is-invalid"
            : "form-control"
        }
        formatInputText={() => formatInputValue(currentValue)}
      />
    </div>
  );
}

export default DateSelector;
