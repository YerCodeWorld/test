/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NODE_ENV: string;
    readonly VITE_SEVEN: string;
    readonly VITE_API_URL: string;
    readonly VITE_SOMEONE_LIKE_YOU: string;
    // Define other environment variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
