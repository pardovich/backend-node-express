const express = require("express");
const Usuario = require("../models/Usuario");
const Producto = require("../models/Producto");

const router = express.Router();

// Obtener número total de registros en cada colección
router.get("/", async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();

        res.json({
            usuarios: totalUsuarios,
            productos: totalProductos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
