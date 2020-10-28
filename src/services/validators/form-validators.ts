import { HookFormValidator } from "services/types/Validators/FormValidator";

export const onChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  el: { name: string; value: string },
  props: HookFormValidator
) => {
  props.setValue(el.name, el.value);
  await props.trigger(el.name);
};
