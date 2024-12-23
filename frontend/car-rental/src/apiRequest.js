import axios from 'axios';

export const apiRequest = async (method, url, data = null) => {
  const token = localStorage.getItem('token'); 
  if (!token) {
    throw new Error("Token JWT manquant. Connectez-vous pour obtenir un token.");
  }
  try {
    const response = await axios({
      method,
      url,
      data, 
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Erreur lors de la requête API:', error);
    throw error; 
  }
};
