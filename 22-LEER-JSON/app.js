var libro = require('./archivos/libros.json');

// estamos mostrando un obj
console.log(libro)

// estamos mostrando una cadena de texto
console.log(libro.autor)

//leer archivo json
var fs = require('fs');

//mostrar contenido JSON en formato legible
fs.readFile('./archivos/libros.json',(error,datos)=>{
    console.log(JSON.parse(datos).autor);
})