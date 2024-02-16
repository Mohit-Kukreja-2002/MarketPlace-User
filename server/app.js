import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userAuthRouter from './routes/userAuth.route.js';

export const app = express();
dotenv.config()

app.use(express.json({limit : "50mb"}));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/",userAuthRouter)

app.get("/test", (req, res) => {
    res.status(200).json({
        success: "true",
        message: "Api is working",
    });
});
