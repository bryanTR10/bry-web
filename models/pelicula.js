const mongoose = require(mongoose);

const peliculasShema = new mongoose.Schema({
    nombre: String,
    estado: Boolean,
    fechaCreacion: Date,
    fechaActualizacion: Date 
});

module.exports = mongoose.mdel("Director", directorShema);