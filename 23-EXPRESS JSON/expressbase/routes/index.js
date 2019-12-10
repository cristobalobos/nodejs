var express = require('express');
var router = express.Router();
//importar libreria para acceder al filesystem

var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  fs.readFile('./public/json/libros.json',(error,datos)=>{
    if(error){
      res.write("error de lectura");
    }else{
      res.render('index', { datos: JSON.parse(datos) });
    }  
  })
  
  
});

module.exports = router;
