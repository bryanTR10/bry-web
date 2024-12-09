const Pelicula = require("../models/pelicula");
const Genero = require("../models/genero");
const Director = require("../models/director");
const Productora = require("../models/productora");
const Tipo = require("../models/tipo");
const pelicula = require("../models/pelicula");

// Crear una nueva pelicula
const createPelicula = async (req, res) => {
    try {
        const { titulo, sinopsis, añoEstreno, gerneroId, directorId, productoraId, tipoId } = req.body;

        // Validar datos
        if (!titulo || !sinopsis || !añoEstreno || !generoId || !directorId || !productoraId || !tipoId) {
            return res.status(400).json ({ error: "Datos incompletos" });
        } 

        // Buscar generos, directores, productores y tipos exitentes
        const genero = await Genero.findById(generoId);
        const director  = await Director.findById(directorId);
        const productora = await Productora.findById(productoraId);
        const tipo = await tipo.findById(tipoId);

        // Crear la pelicula
        const pelicula = new Pelicula({
            titulo,
            sinopsis,
            añoEstreno,
            genero,
            director,
            productora,
            tipo
        });
        await pelicula.sava();
        res.status(201).json(pelicula);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Error: "Error al crear la pelicula" });
    }
};

// Obtener todas las peliculas
const getAllPeliculas = async (req, res) => {
    try {
      const  getAllPeliculas = await Pelicula.find().populate("genera un director productora tipo");
      res.json(peliculas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener las peliculas" });
    }
};

// ... otras funciones (actualizar, eliminar, buscar por titulo, etc.)

module.exports = {
    createPelicula,
    getAllPeliculas,
    //.. otras funciones
}
