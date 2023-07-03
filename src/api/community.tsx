import { axios } from "../libs/axios";

export const getPublicDecks = async () => {
  try {
    const response = await axios.get(`/community`);
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar os decks públicos:', error);
    throw error;
  }
};


