var fs = require('fs');

//var contenido = fs.readFileSync('./archivos/texto.txt','utf8');

var contenido =fs.readFile('./archivos/texto.txt','utf8',(error,datos)=>{
    
    if(error){
        console.log("error de lectura");
        throw error;
    }else{
        console.log(datos);
    }

})



