import jwt from 'jsonwebtoken';

const AUTH_KEY = process.env.AUTH_KEY;

export const createJWT = (payload: { username: string }) => {
  return jwt.sign(payload, AUTH_KEY);
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, AUTH_KEY);
};

export const COOKIE_TOKEN_FIELD = 'TOKEN';
