import { axios } from "../libs/axios";
import { Card } from "../models/interfaces/Card";

export const getPublicDecks = async () => {
  try {
    const response = await axios.get(`/decks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os decks públicos:', error);
    throw error;
  }
};


export const newDeck = async (data: {
  user_id: number;
  folder_id: number;
  name: string;
  ispublic: number;
  clonable: number;
  feedback?: number;
  type: number;
  cards: Card[];
}) => {
  try {
    const formData = new FormData();
    if (data.folder_id) {
      formData.append('folder.id', String(data.folder_id));
    }
    formData.append('user.id', String(data.user_id));
    formData.append('name', data.name);
    formData.append('publico', String(data.ispublic));
    formData.append('clonable', String(data.clonable));
    formData.append('feedback', String(0));
    formData.append('type', String(data.type));
    for(let index in data.cards) {
      formData.append(`cards[${index}].type`, String(data.cards[index].type));
      formData.append(`cards[${index}].question`, data.cards[index].question);
      formData.append(`cards[${index}].answer`, data.cards[index].answer!);
    }

    const response = await axios.post('decks', formData);

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {
    throw new Error('Erro ao criar deck: ' + error);
  }
};


export const getMyDecks = async (userId: number) => {
  try {
    const response = await axios.get(`/decks/mydecks/${userId}`, {});
    const decks = response.data.data;
    return decks;
  } catch (error) {
    console.error('Erro ao buscar os decks do usuário:', error);
    throw error;
  }
};
