const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


app.use(express.json());


const uri = "mongodb+srv://NahuelLV:<db_password>@cluster0.ag77mod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error de conexión:', err));


const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);


app.get('/', (req, res) => {
  res.send('Servidor Express + MongoDB funcionando');
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send('Error al obtener usuarios');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//node servidor.js    Navegador: http://localhost:3000/usuarios
