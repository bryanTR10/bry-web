const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");

const app = express();

// Conexion a la base de datos
mongoose.connect("mongodb://localhost/bry-web");

// Middleware
app.use(express.json());

// Rutas
app.use("/api", apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto ${3000} ");
});