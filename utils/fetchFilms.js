// Carga las variables de entorno desde el archivo .env con la ruta exacta para asegurar que se encuentra
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Función para buscar películas en la API externa (OMDb)
const fetchFilm = async (title) => {
    try {
        // Obtiene la clave API desde las variables de entorno
        const API_KEY = process.env.API_KEY;
        
        // Hace la petición a la API de OMDb con el título y la clave
        const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
        
        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Convierte la respuesta a JSON
        const data = await response.json();
        
        // La API devuelve "False" si no encuentra la película
        if (data.Response === "False") {
            return null;
        }

        // Devuelve todos los datos de la película encontrada
        return data;

    } catch (error) {
        console.error('Error fetching film:', error);
        throw error;
    }
}

// Exporta la función para que el controlador la use
module.exports = fetchFilm;