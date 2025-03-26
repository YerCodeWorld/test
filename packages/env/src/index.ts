import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as path from 'path';
import * as fs from 'fs';
import * as process from "node:process";

/**
 * A function that loads the environment variables
 * @param appName App to load local .env file from
 */
export function loadEnv(appName?: string) {
    // Monorepo's root .env file
    const rootEnv = dotenv.config({ path: path.resolve(process.cwd(), '.env') });
    dotenvExpand.expand(rootEnv);

    // In case we need to load any app-specific .env file
    if (appName) {
        const appEnvPath = path.resolve(process.cwd(), '.env', appName, '.env');
        if (fs.existsSync(appEnvPath)) {
            const appEnv = dotenv.config({ path: appEnvPath });
            dotenvExpand.expand(appEnv);
        }
    }

}

export interface Environment {
    // Auth Related
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    // REDIRECT_URI: string;

    // Database Related
    DATABASE_URL: string;

    // App Related
    NODE_ENV: 'development' | 'production' | 'test';

    //
}

// ANd this is supposed to do some typechecking stuff
export function getEnv(): Environment {
    return {
        // Auth Related
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
        // REDIRECT_URI: process.env.REDIRECT_URI || 'http://localhost:3000/auth/callback',

        // Database Related
        DATABASE_URL: process.env.DATABASE_URL || '',

        // App Related
        NODE_ENV: (process.env.NODE_ENV as Environment['NODE_ENV']) || 'development',
    };
}

// Load environment variables on package import
loadEnv();