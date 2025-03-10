#  Backend con Node.js, Express y MongoDB

Este proyecto es un backend desarrollado con **Node.js, Express.js y MongoDB**, que permite gestionar **Usuarios** y **Productos** con operaciones CRUD. Ademas, incluye contadores para el total de registros y operaciones realizadas.

## Instalacion y Configuracion

### 1 **Clonar el Repositorio**

```
git clone <https://github.com/pardovich/backend-node-express/blob/main/README.md>
cd <backend node express>
```

### 2 **Instalar Dependencias**

```
npm install
```

### 3 **Configurar Variables de Entorno**

Crea un archivo `.env` en la raiz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/sample
```

### 4 **Iniciar el Servidor**

```
node index.js
```

El servidor esta corriendo en `http://localhost:3000`.

---

##  **Endpoints Disponibles**

###  **Usuarios (********`/usuarios`********)**

Ejemplo para **crear un usuario** (`POST /usuarios`):

```json
{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "edad": 25
}
```

---

###  **Productos (********`/productos`********)**

Ejemplo para **crear un producto** (`POST /productos`):

```json
{
    "nombre": "Laptop",
    "precio": 1200,
    "stock": 10
}
```

---

###  **Contadores y Estadisticas**


Ejemplo de respuesta para **`GET /contadores`**:

```json
{
    "usuarios": 5,
    "productos": 8
}
```

Ejemplo de respuesta para **`GET /operaciones`**:

```json
{
    "operaciones_realizadas": 12
}
```

---

##  **Pruebas con Postman**

1. **Abrir Postman**.
2. **Probar cada endpoint con los ejemplos mostrados**.
3. **Revisar las respuestas y verificar que todo funcione correctamente**.

---

##  **Autor**

**Desarrollado por Alejandro Migel Pardo Romano**

