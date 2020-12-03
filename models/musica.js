const mongoose = require('mongoose');
const { Schema } = mongoose;

const musicaSchema = new Schema({
    autor: String,
    musica_nome: String,
    _evento: { type: Schema.Types.ObjectId, ref: 'evento' },
});

module.exports = mongoose.model('musica', musicaSchema);