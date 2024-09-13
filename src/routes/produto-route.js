const Produto = mongoose.model('Produto');
const express = require('express');

const router = express.Router();

router.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.post('/produtos', async (req, res) => {
  try {
    const { titulo, preco, descricao } = req.body;
    const novoProduto = new Produto({ titulo, preco, descricao });
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
});

router.put('/produtos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, preco, descricao } = req.body;
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      id,
      { titulo, preco, descricao },
      { new: true }
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(produtoAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
});

module.exports = router;