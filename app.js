const express = require('express');
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


// Ruta de ejemplo
app.get('/', (req, res) => {
    res.render('index');
  });
  

// Inicia el servidor
app.listen(3002, () => {
  console.log('Servidor iniciado en el puerto 3002');
});
