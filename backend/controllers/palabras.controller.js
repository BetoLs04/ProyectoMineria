// IMportamos el modelo definido
import { modeloPalabras } from "../models/palabras.model.js";

// Le colocamos los datos que debe llevar gracias a las variables
modeloPalabras.create({
    // Colocar que variable es y su valor 
    name:"Beto",
    edad:21
})

// Exportamos el test y verificar que se llama la funcion
export const test = () =>{
    console.log("Llamando al controlador")
}