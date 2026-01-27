//import "./config/env.js"
import dotenv from "dotenv"
dotenv.config({path: "./.env"})

import express from "express";
const app = express();
const port = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.json("server up and runnig")
})

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
