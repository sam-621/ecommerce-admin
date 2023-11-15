import { jwtVerify, SignJWT } from 'jose';

const AUTH_KEY = process.env.AUTH_KEY;
export const COOKIE_TOKEN_FIELD = 'token';

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

export async function signJWT(payload: JWTPayload, opt?: JWTOptions): Promise<string> {
  const iat = opt?.iat ?? Math.floor(Date.now() / 1000);
  const exp = opt?.exp ?? iat + 60 * 60; // one hour

  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(AUTH_KEY));
}

type JWTPayload = {
  username: string;
};

type JWTOptions = {
  iat: number;
  exp: number;
};
