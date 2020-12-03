const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: String,
	email: String
});

module.exports = mongoose.model('usuario', usuarioSchema);