const Mensaje = require('../models/mensajes');

exports.crearMensaje = (req, res) => {
  const { usuario, mensaje } = req.body;
  Mensaje.create(usuario, mensaje, (error, resultado) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send({ id: resultado.insertId });
    }
  });
};

exports.obtenerTodosLosMensajes = (req, res) => {
  Mensaje.findAll((error, resultados) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(resultados);
    }
  });
};

exports.actualizarMensaje = (req, res) => {
  const { id } = req.params;
  const { usuario, mensaje } = req.body;
  Mensaje.update(id, mensaje, (error, resultado) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(resultado);
    }
  });
};

exports.eliminarMensaje = (req, res) => {
  const { id } = req.params;
  Mensaje.delete(id, (error, resultado) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(resultado);
    }
  });
};

