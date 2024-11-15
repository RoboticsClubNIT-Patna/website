import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

let corsOptions = {
    origin: process.env.FRONTEND_URL,
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.status(200).send("Hello World")
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} 🚀.`)
})