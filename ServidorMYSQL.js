const express = require('express');
const mysql = require('mysql');
const app = express();


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: '',         
  database: 'testdb'   
});


connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a MySQL como id ' + connection.threadId);
});


app.get('/', (req, res) => {
  res.send('Es una Pagina Web y MySQL!');
});


app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en la consulta');
    } else {
      res.json(results);
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});



//PARTE SQL


CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO usuarios (nombre, email) VALUES
('Ana', 'ana@example.com'),
('Juan', 'juan@example.com');
