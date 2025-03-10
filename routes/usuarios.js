const express = require("express");
const Usuario = require("../models/Usuario");

const router = express.Router();

// Crear un usuario (POST /usuarios)
router.post("/", async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los usuarios (GET /usuarios)
router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un usuario por ID (PUT /usuarios/:id)
router.put("/:id", async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un usuario por ID (DELETE /usuarios/:id)
router.delete("/:id", async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
