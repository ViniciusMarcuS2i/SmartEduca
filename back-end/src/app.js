require('dotenv').config(); // Carrega variáveis de ambiente

const cors = require('cors')
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());

// Conectar ao banco de dados
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
