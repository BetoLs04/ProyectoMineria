import {Schema, model} from "mongoose"

const EsquemaPalabras = new Schema({
    palabras:String
})

export const modeloPalabras = new model("Palabras", EsquemaPalabras)
