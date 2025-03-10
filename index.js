require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const usuariosRoutes = require("./routes/usuarios"); // Importar rutas de usuarios
const productosRoutes = require("./routes/productos"); // Importar rutas de productos

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const contadoresRoutes = require("./routes/contadores");


// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/contadores", contadoresRoutes);

// Conectar a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("🔥 Conectado a MongoDB"))
    .catch(err => console.error("❌ Error al conectar MongoDB:", err));

// **Aquí nos aseguramos de registrar las rutas**
app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡El servidor está funcionando y conectado a MongoDB!");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

let totalOperaciones = 0;

// Middleware para contar operaciones
app.use((req, res, next) => {
    totalOperaciones++;
    console.log(`🔥 Total de operaciones realizadas: ${totalOperaciones}`);
    next();
});

// Ruta para obtener el número total de operaciones
app.get("/operaciones", (req, res) => {
    res.json({ totalOperaciones });
});
