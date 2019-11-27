//invocar express
var express = require('express');

//inicializar express
var app = express();

app.all("/",function(peticion, respuesta){
  respuesta.send("hola");
})

//asignamos el puerto especifico y ejecutamos una funcion cada vez que se ejecute
// Cada vez que escuchemos alguna petición, vamos a enrutar el tráfico hacia diferentes secciones, 
var server = app.listen(3000, function(){  
});