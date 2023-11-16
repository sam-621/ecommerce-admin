export type StringifyObject<T> = {
  [K in keyof T]: string;
};

export type ServerActionResult = {
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
  error?: boolean;
};
