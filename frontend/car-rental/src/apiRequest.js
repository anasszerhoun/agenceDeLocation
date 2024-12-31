import axios from 'axios';

const apiRequest = async (method,url,data = null) => {
  const token = localStorage.getItem('token'); 
  if (!token) {
    throw new Error("Vous n'etes pas connecter !");
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
    return response; 
  } catch (error) {
    console.error('Erreur lors de la requête API:', error);
    throw error; 
  }
};
export default apiRequest;