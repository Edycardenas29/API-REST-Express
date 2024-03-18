import 'dotenv/config';
import "./database/connectdb.js";
import express from 'express'
import authRoutes from './routes/authroutes.js'


const app = express();

app.use(express.json());
app.use("/api/v1", authRoutes);


const PORT= process.env.PORT || 5000
app.listen(5000, () => console.log("🔥🔥🔥 http://localhost:"+ PORT));


