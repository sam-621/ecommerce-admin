export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_KEY: string;
      EXPIRATION_TIME: string;
      CLOUDINARY_CLOUD_NAME: string;
      CLOUDINARY_UPLOAD_PRESET: string;
    }
  }
}
