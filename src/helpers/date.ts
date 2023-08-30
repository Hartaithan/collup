import { pad } from "./string";

export const formatDate = (value: string) => {
  const date = new Date(value);
  const day = pad(date.getDate(), 2);
  const month = pad(date.getMonth() + 1, 2);
  const year = date.getFullYear();
  return `${month}.${day}.${year}`;
};
