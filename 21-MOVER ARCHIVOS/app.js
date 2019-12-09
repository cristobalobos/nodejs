var fs = require("fs");

//va a llamar un comando del filesystem y lo va a tomar de la ruta original y lo va a copiar 
function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar){

    fs.copyFile(rutaOriginal+"/"+archivoParaCopiar, nuevaRuta + "/" + archivoParaCopiar , (error)=>{
        if (error) {
            console.log("error");
        }else{
            //borrar el original
            eliminarArchivo( rutaOriginal,  archivoParaCopiar);   
        }
        }
    )
}
   

function eliminarArchivo( rutaOriginal, archivoParaCopiar ){
    fs.unlink( rutaOriginal  + '/' + archivoParaCopiar , (error)=>{
        if (error) {
            console.log("error eliminar ");
        } else {
            console.log("borrar ok");
        }
    })
}

copiarArchivo('./archivos' , './otros_archivos', 'archivo_original.txt');