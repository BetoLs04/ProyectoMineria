// Tomar la funcion de crear Schema y model de mongoose
import {Schema, model} from "mongoose"

// Se crea el esquema dando el nombre al mismo
const EsquemaPalabras = new Schema({
    // Definir las variables y el tipo que es
    name:String,
    edad:Number
})

// Exportamos el modelo de controller donde se colocan las variables
export const modeloPalabras = new model("Palabras", EsquemaPalabras)

