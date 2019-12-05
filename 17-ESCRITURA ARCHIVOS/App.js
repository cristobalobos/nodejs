var fs = require('fs');

// escribir archivo
fs.writeFile('./archivo/texto.txt','datos enviados desde node',(error)=>{
    if (error){
        console.log("error al escribir archivo");
    }else{
        console.log("archivo modificado correctamente");
    }
})



