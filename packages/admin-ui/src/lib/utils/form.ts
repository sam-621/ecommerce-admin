import { type StringifyObject } from './types';

export const getJsonFromFormData = <R = object>(formData: FormData): StringifyObject<R> => {
  const object: Record<string, string> = {};

  formData.forEach((value, key) => (object[key] = value as string));

  return object as StringifyObject<R>;
};
