const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    edad: { type: Number, required: true }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
