const app = require('./app');
const http = require('http');
const socketIo = require('socket.io');

const servidor = http.createServer(app);

const io = socketIo(servidor, {
    cors: {
        origin: "*", // Permitir solicitudes desde cualquier origen
        methods: ["GET", "POST", "PUT", "DELETE"] // Permitir todos los métodos necesarios
    }
});

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('nuevoMensaje', (mensaje) => {
        io.emit('mensaje', mensaje);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PUERTO = process.env.PORT || 3000;
servidor.listen(PUERTO, () => {
    console.log(`Servidor está corriendo en el puerto ${PUERTO}`);
});
