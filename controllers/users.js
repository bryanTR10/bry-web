const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Validar que el rol sea válido
        if (!['administrador', "docente"].includes(role)) {
            return res.status(400).json({ error: 'Rol inválido' });
        }
        // Crear el usuario
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};