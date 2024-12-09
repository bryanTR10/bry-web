const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'tu_clave_secreta');
        const user = await User.findById(decoded._id);
        if (user.role === 'admin') {
            // El usuario es administrador, tiene todos los permisos
            next();
        } else if (user.role === 'docente') {
            // El usuario es docente, solo puede visualizar inventarios
            req.user = user;
            next();
        } else {
            return res.status(403).send({ error: 'No tienes permisos para realizar esta acción' });
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'No autorizado' });
    }
};