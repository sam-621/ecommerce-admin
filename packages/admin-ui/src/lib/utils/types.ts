export type StringifyObject<T> = {
  [K in keyof T]: string;
};

export type MakeAny<T> = {
  [K in keyof T]: any;
};

export type ServerActionResult = {
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
  error?: boolean;
};
