import { axios } from "../libs/axios";

export const getPublicDecks = async () => {
  try {
    const response = await axios.get(`/decks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os decks públicos:', error);
    throw error;
  }
};