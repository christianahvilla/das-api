import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

interface ENV {
    NODE_ENV: string | undefined;
    PORT: number | undefined;
    DB_HOST: string | undefined;
    DB_DATABASE: string | undefined;
    DB_USERNAME: string | undefined;
    DB_PASSWORD: string | undefined;
}

interface Config {
    NODE_ENV: string;
    PORT: number;
    DB_HOST: string;
    DB_DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
}

const getConfig = (): ENV => {
    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        DB_HOST: process.env.DB_HOST,
        DB_DATABASE: process.env.DB_DATABASE,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
    };
};

const getSanitzedConfig = (config: ENV): Config => {
    console.log(process.env.NODE_ENV)
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
        throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
