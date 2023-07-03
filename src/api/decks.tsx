import { axios } from "../libs/axios";
import { Card } from "../models/interfaces/Card";
import { CardType } from "../models/types/CardType";

export const getPublicDecks = async () => {
  try {
    const response = await axios.get(`/decks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os decks públicos:', error);
    throw error;
  }
};


export const newDeckAnki = async (data: {
  folder_id: number;
  name: string;
  ispublic: number;
  clonable: number;
  type: number;
  cards: Card[];
}) => {
  try {
    const formData = new FormData();
    if (data.folder_id) {
      formData.append('folder.id', String(data.folder_id));
    }
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

    await axios.post('decks', formData);
    return 'success';
  } catch (error) {
    throw new Error('Erro ao criar deck: ' + error);
  }
};


export const newDeckAvaliativo= async (data: {
  folder_id: number;
  name: string;
  ispublic: number;
  clonable: number;
  type: number;
  cards: Card[];
}) => {
  try {
    const formData = new FormData();
    if (data.folder_id) {
      formData.append('folder.id', String(data.folder_id));
    }
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



export const getDecksByAI = async (data: {
  description: string;
  type: CardType;
  quantity: number;
}) => {
  try {
    let tp;
    if (data.type === 1) { //Objetiva
      tp = 1; //tipo da pergunta usada no back
    } else { //descritiva ou anki
      tp = 2; //tipo da pergunta usada no back
    }
    const response = await axios.get(`/ask/${data.quantity}/${data.description}/${tp}`, {});
    return response;
  } catch (error) {
    console.error('Erro ao gerar decks:', error);
    throw error;
  }
};