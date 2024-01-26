import { configDotenv } from 'dotenv';
import { connectToDatabase } from './database/connectToDatabase.js';
import cors from 'cors';
import express from "express";
// database connection
const pool = connectToDatabase();
// express app
const app = express();
// middleware
configDotenv();
app.use(cors());
// server
app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`App is listening at port ${process.env.EXPRESS_PORT}`);
});
// routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "hi" });
});
//# sourceMappingURL=app.js.map