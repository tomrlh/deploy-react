export const createArrayFromNumber = (length: number) =>
  Array.from({ length: length ? length - 1 : 0 }, (v, k) => k);

export const getArrayFromLocalStorage = (property: string) => {
  const array = localStorage.getItem(property);

  if (!array || array === "{}" || array === "[]") {
    console.log("LS IF");
    return [];
  } else {
    console.log("LS ELSE");
    return JSON.parse(array);
  }
};
