const mongoose = require(mongoose);

const productoraShema = new mongoose.Schema({
    nombre_productora: String,
    estado: Boolean,
    fechaCreacion: Date,
    fechaActualizacion: Date,
    Slogan: String,
    Descripcion: String
});

module.exports = mongoose.mdel("Productora", productoraShema);