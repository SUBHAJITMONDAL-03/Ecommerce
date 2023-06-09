import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import JWT from "jsonwebtoken"
//rest object 
const app = express();

//configure env
dotenv.config() 
//database config
connectDB();
//middlewares
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoutes);
//rest api
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to ecommerce app",
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on mode ${process.env.dev_mode} on mode${PORT}`.bgCyan.white);
});