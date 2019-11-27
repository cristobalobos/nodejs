//console.log("---------Resultado: " + Math.floor(Math.random()*100));
var http=require('http');

var servidor = http.createServer(function(peticion, respuesta){
    console.log("peticion web");
    //lo que se activa cuando se recibe una peticion dentro de nuestro servidor
    respuesta.writeHead(200, {'Content-Type':'text/html'});
    respuesta.write("Respuesta para la direccion" + peticion.url);
    
    console.log("peticion web");
})

// 
servidor.listen(3000)

console.log("Ejecutando servidor NodeJS");

