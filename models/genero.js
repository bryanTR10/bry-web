const mongoose = require(mongoose);

const generoShema = new mongoose.Schema({
    nombre: String,
    estado: Boolean,
    fechaCreacion: Date,
    fechaActualizacion: Date,
    descripcion: String
});

module.exports = mongoose.mdel("Genero", generoShema);