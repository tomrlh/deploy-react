import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

export interface HookFormValidator {
  register: Function; // aparentemente não preciso usar para vincular os inputs à validação (react-hook-form)
  errors: DeepMap<Record<string, any>, FieldError>;
  setValue: Function;
  trigger: Function;
}
