const { json } = require("express");
const Tipo = require("../models/tipo");

// Crear un nuevo tipo
const createTipo = async (req, res) => {
    try {
        const { nombre } = req.body;

        // Validacion de datos
        if (!nombre) {
            return res.status(400).json({ error: "El nombre del tipo es obligatorio" });
        }

        // Crear un nuevo tipo
        const nuevoTipo = new Tipo({ nombre });
        await nuevoTipo.save();

        res.status(201).json(nuevoTipo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el tipo" });
    }
};

// Obtener todos los tipos
const getAllTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los tipos"   });
    }
};

// obtener un tipo ID
const getTipoById = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            return res.status(404).json({ error: "Tipo no encontrado" });
        }
        res.json(tipo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el tipo" });
    }
};

// Actualizar un tipo 
const updateTipo = async (req, res) => {
  try {
    const { nombre } = req.body;
    const tipo = await Tipo.findByIdAndUpdate(req.params.id, { nombre }, { new: true });
     if (!tipo) {
       return res.status(404).json({ erro: "Tipo no encontrado" });
    }
    res.json(tipo);
  } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el tipo" });
    }
};

// Eliminar un tipo
const deleteTipo = async (req, res) => {
    try {
        await Tipo.findByIdAndDelete(req.params.Id);
        res,json({ message: "Tipo eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el tipo" });
    }
};

module.exports = {
    createTipo,
    getAllTipos,
    getTipoById,
    updateTipo,
    deleteTipo
}