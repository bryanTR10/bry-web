const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (userData) => {
    // ... (código existente para crear usuario)
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign({ userId: user._id }, 'tu_clave_secreta', { expiresIn: '1h' });
    return { user, token };
};

module.exports = {
    createUser,
    loginUser
};