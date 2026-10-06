import db from "./db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port =process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api/diakok", async (req, res) => {
    try{
        const [sor] = await db.query("SELECT*FROM diakok");
        res.status(200).json(sor);
    }
    catch{

    }
});

