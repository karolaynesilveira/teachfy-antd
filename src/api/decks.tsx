import { axios } from "../libs/axios";
import { Card } from "../models/interfaces/Card";
import { CardType } from "../models/types/CardType";

export const newDeckAnki = async (data: {
  folder_id: number;
  name: string;
  description: string;
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
    formData.append('description', data.description);
    formData.append('public', String(data.ispublic));
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
export const updateDeck = async (deckId: number, updatedData: {
  folder_id?: number;
  name?: string;
  ispublic?: number;
  clonable?: number;
  type?: number;
  cards?: Card[];
}) => {
  try {
    const formData = new FormData();
    if (updatedData.folder_id) {
      formData.append('folder.id', String(updatedData.folder_id));
    }
    if (updatedData.name) {
      formData.append('name', updatedData.name);
    }
    if (updatedData.ispublic) {
      formData.append('publico', String(updatedData.ispublic));
    }
    if (updatedData.clonable) {
      formData.append('clonable', String(updatedData.clonable));
    }
    if (updatedData.type) {
      formData.append('type', String(updatedData.type));
    }
    if (updatedData.cards) {
      for (let index in updatedData.cards) {
        formData.append(`cards[${index}].type`, String(updatedData.cards[index].type));
        formData.append(`cards[${index}].question`, updatedData.cards[index].question);
        formData.append(`cards[${index}].answer`, updatedData.cards[index].answer!);
      }
    }
  } catch (error) {
    throw new Error('Erro ao atualiza deck: ' + error);
  }
  };


export const newDeckAvaliativo= async (data: { // PRECISA AJUSTAR ESSA FUNÇÃO, NÃO TÁ SALVANDO O DECK
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

export const getMyDecks = async () => {
  try {
    const response = await axios.get(`/decks`);
    const decks = response.data;
    return decks;
  } catch (error) {
    console.error('Erro ao buscar os decks do usuário:', error);
    throw error;
  }
};

export const getDeckById = async (deckId: number) => {
  try {
    const response = await axios.get(`/decks/${deckId}`);
    const decks = response.data;
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