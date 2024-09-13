const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const scheme = new Schema({
    titulo: {
        type: String,
        required: true
    },
    preco:{
        type:Number
    },
    descricao: {
        type : String
    }
    


})

module.exports = mongoose.model('Produto', scheme)

