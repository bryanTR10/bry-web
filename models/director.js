const mongoose = require('mongoose');


const directorShema = new mongoose.Schema({
    nombre: String,
    estado: Boolean,
    fechaCreacion: Date,
    fechaActualizacion: Date 
});

module.exports = mongoose.mdel("Director", directorShema);