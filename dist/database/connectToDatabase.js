import pkg from 'pg';
import { configDotenv } from 'dotenv';
const { Pool } = pkg;
configDotenv();
export const connectToDatabase = () => {
    let pool = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    });
    console.log("Connecting to PostgreSQL...");
    (async () => {
        try {
            await pool.connect();
            console.log("success");
        }
        catch (error) {
            console.log("error");
            console.log(error.message);
            pool = false;
        }
    })();
    return pool;
};
//# sourceMappingURL=connectToDatabase.js.map