var fs = require('fs');

//var contenido = fs.readFileSync('./archivos/texto.txt','utf8');

var contenido =fs.readFile('./archivos/texto.txt','utf8',function(error,datos){
    console.log(datos);
})

console.log("codigo" + contenido)