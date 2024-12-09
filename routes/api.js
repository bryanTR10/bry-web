const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const directoController = require("../controllers/director");
const tipoController = require("../controllers/tipo")

// Ruta de registro 
router.post("/register", async (req, res) => {
    const user = new User({
        password: req.body.password
    });
    await user.save();
});

// Ruta de inicio de  seccion 
router.post("/login", async (req, res) => {
    const user = await User.findOne({ emain: req.body.email });
    if (!user || !bcrypt.compare(req.body.password, user.password)) {
        return res.status(401).json({ message: "creadenciales invalidas"});
    }
    const token = jwt.sign({ userId: user._id }, 'tu_clave_secreta', { expiresIn: '1h' });

    jwt.verify(token, 'tu_clave_secreta', (err, decoded) => {
        // ...
    });
});

router.post("/directores", directoController.createDirector);
router.get("/directores", directoController.getALLDirectors);
router.post("/tipos", tipoController.createTipo);
router.get("/tipos", tipoController.getALLTipos);
router.get("/tipos/:id", tipoController.getTipoById);
router.put("/tipos/:id", tipoController.updateTipo);
router.delete("/tipos/:id", tipoController.deleteTipo);

module.exports = router;