const Director = require("../models/director");

const createDirector = async (req, res) => {
    try {
        const { nombre, estado, fechaCreacion, fechaActualizacion } = req.body;

        // Validar datos
        if (!nombre) {
            return res.status(400).json({ error: "El nombre del director es obligatorio" });
        }
        // Crear el director
        const director = new Director({ nombre, estado, fechaActualizacion, fechaCreacion });
        await director.save();
        res.status(201).json(director);
    } catch (error) {
        console.error(error);
        req.status(500).json({ error: "Error al crear el director" });
    }
};

const getAllDirectors = async (req, res) => {
    // Logica para obtener todos los directores
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ error: "Director no encontrado" });
        }
        res.json(director);
    } catch (error) {
        console.error (error);
        res.status(500).json({ error: "Error al obtener los directores"});
    }
  };
  //  Obtener un director por ID
const getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ error: "Director no encontradp" });
        }
        res.json(director);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el director" });
    }
};

// Actualizar un director 
const updateDirector = async (req, res) => {
    try{
        const { nombre, estado, fechaActualizacion, fechaCreacion } = req.body;
        const director = await Director.findByIdAndUpdate(req.params.id, { nombre, estado, fechaActualizacion, fechaCreacion },{ new: true });
        if (!director) {
            return res.status(404).json({ error: "Director no encontrado" })
        }
        res.json(director);
    } catch (error) {
        console.error;
        res.status(500).json({ error: "Error al actualizar el director" })
    }
};

//Eliminar el director 
const deleteDirector = async (req, res) => {
    try {
        await Director.findByIdAndDelete(req.params.id);
        res.json({ message: "Director Eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el director" });
    }
};

module.exports = {
    createDirector,
    getAllDirectors,
    getDirectorById,
    updateDirector,
    deleteDirector
};