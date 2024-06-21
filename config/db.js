// servidor.js
require('dotenv').config(); // Cargar variables de entorno desde .env

const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'chat_app'
});

conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = conexion;
