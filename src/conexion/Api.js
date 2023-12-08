import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Reemplaza con la URL base de tu API
});

export const getDatos = async () => {
  try {
    const response = await api.get('/datos'); // Reemplaza con tu ruta específica
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postDatos = async (data) => {
  try {
    const response = await api.post('/datos', data); // Reemplaza con tu ruta específica
    return response.data;
  } catch (error) {
    throw error;
  }
};