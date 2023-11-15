import bcrypt from 'bcrypt';

export const hash = async (str: string) => {
  return await bcrypt.hash(str, 10);
};

export const compare = async (str: string, encrypted: string) => {
  return await bcrypt.compare(str, encrypted);
};
