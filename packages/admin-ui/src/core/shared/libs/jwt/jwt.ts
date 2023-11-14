import { jwtVerify, SignJWT } from 'jose';

const AUTH_KEY = process.env.AUTH_KEY;
export const COOKIE_TOKEN_FIELD = 'token';

export async function signJWT(payload: JWTPayload): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(AUTH_KEY));
}

export async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify<JWTPayload>(token, new TextEncoder().encode(AUTH_KEY));
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return payload;
  } catch (error) {
    console.log({
      error
    });

    return null;
  }
}

type JWTPayload = {
  username: string;
};
