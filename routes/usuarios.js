const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

// Crear un usuario
router.post('/', async (req, res) => {
  const { nombre, correo } = req.body;
  const nuevoUsuario = await Usuario.create({ nombre, correo });
  res.json(nuevoUsuario);
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  await Usuario.update({ nombre, correo }, { where: { id } });
  res.json({ mensaje: "Usuario actualizado" });
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Usuario.destroy({ where: { id } });
  res.json({ mensaje: "Usuario eliminado" });
});

module.exports = router;
