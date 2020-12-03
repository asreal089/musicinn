const mongoose = require('mongoose');
const { Schema } = mongoose;

const musicoSchema = new Schema({
    preco: Number,
    duracao: Number,
    data: Date,
    _usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
    _musico: { type: Schema.Types.ObjectId, ref: 'musico' }
});

module.exports = mongoose.model('musico', musicoSchema);