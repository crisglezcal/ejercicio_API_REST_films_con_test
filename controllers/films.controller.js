// Importa la función para buscar películas en la API externa
const fetchFilm = require("../utils/fetchFilms");

// CREATE - Crear una película (SIMULADO)
const createFilm = async (req, res) => {
    try {
        const data = req.body; // Toma los datos que me envían
        res.status(200).json({ message: `Se ha guardado ${data.Title}` });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// READ - Buscar una película (REAL con API externa)
const getFilm = async (req, res) => {
    try {
        const title = req.params.title; // Toma el título de la URL
        let film = await fetchFilm(title); // Busca en la API externa
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json(film); // Devuelve la película encontrada
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(404).json({ message: 'Film not found' });
    }
}

// UPDATE - Actualizar película (SIMULADO)
const editFilm = async (req, res) => {
    try {
        const { id, Title } = req.body; // Toma ID y título del cuerpo
        res.status(200).json({ 
            id: id, 
            message: `Se ha actualizado ${Title}` 
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(404).json({ message: 'Film not found' });
    }
}

// DELETE - Eliminar película (SIMULADO)
const deleteFilm = async (req, res) => {
    try {
        const { id } = req.body; // Toma ID del cuerpo
        res.status(200).json({ 
            id: id, 
            message: `Se ha borrado la película con ID: ${id}` 
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(404).json({ message: 'Film not found' });
    }
}

// Exporta todas las funciones para que el router las use
module.exports = {
    createFilm,
    getFilm,
    editFilm,
    deleteFilm
}