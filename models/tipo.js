const mongoose = require(mongoose);

const tipoShema = new mongoose.Schema({
    nombre: String,
    fechaCreacion: Date,
    fechaActualizacion: Date, 
    descripcion: String
});

module.exports = mongoose.mdel("Director", directorShema);