declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DB_HOST: string;
      NEXT_PUBLIC_DB_USER: string;
      NEXT_PUBLIC_DB_PASS: string;
      NEXT_PUBLIC_CLOUDINARY_NAME: string;
      NEXT_PUBLIC_CLOUDINARY_API_KEY: string;
      NEXT_PUBLIC_CLOUDINARY_APE_SECRET: string;
    }
  }
}

export {};
