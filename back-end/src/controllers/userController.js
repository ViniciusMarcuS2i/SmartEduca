const User = require('../models/userModel');

// Função para listar todos os usuários
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Puxa todos os documentos da coleção
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários', details: err.message });
  }
};

// Função para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se todos os campos necessários foram fornecidos
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
    }

    // Cria um novo usuário
    const newUser = new User({ name, email, password });

    // Salva o usuário no banco de dados
    await newUser.save();

    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário', details: err.message });
  }
};
