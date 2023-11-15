export type StringifyObject<T> = {
  [K in keyof T]: string;
};
