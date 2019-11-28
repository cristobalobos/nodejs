var express = require('express');
var router = express.Router();

//
router.get("/", function(peticion, respuesta){
    respuesta.send("dinamico");
})

router.get("/:datoURL/:ID", function(peticion, respuesta){
   // respuesta.send("informacion dinamica: " + peticion.params.datoURL);
   respuesta.render('dinamico',{
       datos: {
           titulo: peticion.params.datoURL,
           ID: peticion.params.ID
       }
   })
})

module.exports = router;