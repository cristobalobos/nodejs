//invocar express
var express = require('express');

//inicializar express
var app = express();

//sin importar el verbo http vamos a generar una respuesta
app.all("/",function(peticion, respuesta){
  respuesta.send("hola");
})

//esta aplicacion puede mostrar comportamiento de una API RESTfull
//comportamiento get
app.get('/acerca',function(peticion,respuesta){
  respuesta.send("ACERCA");
})

//comportamiento post
app.post('/acerca',function(peticion,respuesta){
  respuesta.send("ACERCA");
})

//comportamiento put
app.put('/acerca',function(peticion,respuesta){
  respuesta.send("ACERCA");
})


//asignamos el puerto especifico y ejecutamos una funcion cada vez que se ejecute
// Cada vez que escuchemos alguna petición, vamos a enrutar el tráfico hacia diferentes secciones, 
var server = app.listen(3000, function(){  
});