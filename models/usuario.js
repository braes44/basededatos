const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Usuario;
