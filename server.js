require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log("✅ Base de datos conectada y sincronizada.");
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
  })
  .catch(err => console.error("❌ Error al conectar la base de datos:", err));
