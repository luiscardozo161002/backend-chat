const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

const app = express();

// Middleware para manejar CORS en Express
app.use(cors({
    origin: '*', // Permitir solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir todos los métodos necesarios
    allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const mensajeRutas = require('./routes/mensajeRutas');
app.use('/api/mensajes', mensajeRutas);

module.exports = app;
