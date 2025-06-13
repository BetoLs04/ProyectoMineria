import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("Esta mal la chingadera", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando al servidor")
})