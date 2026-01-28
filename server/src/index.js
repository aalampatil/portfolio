import dotenv from "dotenv"
dotenv.config({path: "./.env"})

import express from "express";
import cors from "cors"
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(cors({
        origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT,
    ]
}))


app.get("/", (req, res) => {
    res.json("server up and runnig")
})

import commitDetailRouter from "./routes/commitDetail.routes.js";

app.use("/api", commitDetailRouter)

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
