// Importa el controlador de películas que contiene las funciones (getFilm, createFilm, editFilm, deleteFilm)
const filmsController = require("../controllers/films.controller");

// Crea un objeto "router" de Express para manejar las rutas (como un mapa de direcciones para las URLs)
const router = require("express").Router();

// GET http://localhost:3000/api/film/:title
router.get("/:title", filmsController.getFilm);

// POST http://localhost:3000/api/film/
router.post("/", filmsController.createFilm);

// PUT http://localhost:3000/api/film/
router.put("/", filmsController.editFilm); 

// DELETE http://localhost:3000/api/film/ 
router.delete("/", filmsController.deleteFilm); 

// Exporta el router para que otros archivos puedan usarlo
module.exports = router;