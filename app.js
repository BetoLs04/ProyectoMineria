// Importar librerias incluida la funcion de test en controller
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/palabras.controller.js";

// Tomar la configuracion del env
dotenv.config();
// Da la funcion para tomar las credenciales de mongoose y conectarse
mongoose.connect(process.env.urlbd)
//  Cuando de pin manda el mensaje que esta funcionando la conexion
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
// Tomar el error y mostrar que no se a conectado a la bd
.catch((error)=>{
    console.log("Esta mal la chingadera", error)
})

// Definir la constante con la funcion de express
const app = express();
// Usar cors
app.use(cors());
// Colocar el puerto donde se va ejecutar el programa
app.listen(4000, ()=>{
    // Se conecto al puerto indicado
    console.log("Escuchando al servidor")
})

// Mostrar la funcion test
test();