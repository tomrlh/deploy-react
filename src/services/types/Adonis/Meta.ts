export type Meta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: String;
  last_page_url: String;
  next_page_url: String;
  previous_page_url: String;
};

export const initialMetaState = {
  total: 2,
  per_page: 20,
  current_page: 1,
  last_page: 1,
  first_page: 1,
  first_page_url: "/?page=1",
  last_page_url: "/?page=1",
  next_page_url: "null",
  previous_page_url: "null",
};
