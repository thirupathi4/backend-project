import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
dotenv.config();
const app = express();
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello World");
})


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error("Failed to connect to the database. ", error);
    })

