// Carga las variables de entorno desde el archivo .env (como la API_KEY y el PORT)
require("dotenv").config()

// Importa express.js para crear el servidor web
const express = require("express");

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto donde correrá el servidor => Usa el puerto del .env o el 3000 por defecto
const port = process.env.PORT || 3000;

// Habilita que el servidor entienda datos en formato JSON (para poder recibir datos en las peticiones POST, PUT, etc.)
app.use(express.json());

// Importa las rutas de las películas desde el archivo films.js
const filmsRouter = require("./routes/films");

// Conecta las rutas de películas al servidor
app.use("/api/film", filmsRouter);

// Inicia el servidor y lo pone a "escuchar" en el puerto definido
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporta la aplicación para que los tests puedan usarla
module.exports = app;