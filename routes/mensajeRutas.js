const express = require('express');
const router = express.Router();
const controladorMensajes = require('../controllers/controladorMensajes');

router.post('/', controladorMensajes.crearMensaje);
router.get('/', controladorMensajes.obtenerTodosLosMensajes);
router.put('/:id', controladorMensajes.actualizarMensaje); // Ruta para actualizar mensaje
router.delete('/:id', controladorMensajes.eliminarMensaje);

module.exports = router;
