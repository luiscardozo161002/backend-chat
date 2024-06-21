const db = require('../config/db');

const Mensaje = {
  create: (usuario, mensaje, callback) => {
    const query = 'INSERT INTO mensajes (usuario, mensaje) VALUES (?, ?)';
    db.query(query, [usuario, mensaje], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM mensajes';
    db.query(query, callback);
  },
  update: (id, mensaje, callback) => {
    const query = 'UPDATE mensajes SET mensaje = ? WHERE id = ?';
    db.query(query, [mensaje, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM mensajes WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Mensaje;
