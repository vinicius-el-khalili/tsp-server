import pkg from 'pg';
import { configDotenv } from 'dotenv';

const { Pool } = pkg
configDotenv()


export const connectToDatabase = () : pkg.Pool|false => {

    let pool: pkg.Pool | false = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",  
    }) 

    console.log("Connecting to PostgreSQL...")

    ;(async()=>{

        try { 

            await pool.connect()
            console.log("success") 

        } catch(error) { 

            console.log("error")
            console.log(error.message) 
            pool = false

        } 
        
    })();

    return pool 

}
