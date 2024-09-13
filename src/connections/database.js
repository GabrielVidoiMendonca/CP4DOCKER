import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/Produtocp";

const connectDataBase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
};

module.exports = connectDataBase;