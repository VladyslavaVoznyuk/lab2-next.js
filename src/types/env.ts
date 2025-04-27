interface ProcessEnv {
    DATABASE_URL: string;
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends ProcessEnv {}
    }
}

