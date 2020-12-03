const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoritoSchema = new Schema({
    _usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
    _musico: { type: Schema.Types.ObjectId, ref: 'musico' }
});

module.exports = mongoose.model('favorito', favoritoSchema);