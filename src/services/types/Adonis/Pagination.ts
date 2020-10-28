import { Meta } from "services/types/Adonis/Meta";

export type Pagination<T> = {
  meta: Meta;
  data: Array<T>;
};
