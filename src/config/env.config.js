import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'development',
};
for (const variable of Object.keys(envConfig)) {
    if (!process.env[variable]) {
        console.error(`falta la variable de entorno "${variable}".`);
        process.exit(1);
    }
}export default envConfig;