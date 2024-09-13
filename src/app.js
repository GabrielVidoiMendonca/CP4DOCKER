const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//fazendo conexão com o mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase');

//habilitando o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//registrando o model
require('./models/Produto');

//criando rotas
const produtoRouter = require('./routes/produto-route.js');
app.use('/produtos', produtoRouter);

module.exports = app;
