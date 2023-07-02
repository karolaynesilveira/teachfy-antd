import { useNavigate } from "react-router-dom";
import { axios } from "../libs/axios";
import { User } from "../models/types/User";
import storage from "../utils/storage";

export const createUser = async (user: User) => {
  try {
    const response = await axios.post(`/users`, user);
    
    if (response.status === 200) {
      storage.setToken(response.data.data.token);
      storage.setUser({id: response.data.data.id, name:response.data.data.name});
      // Autenticação bem-sucedida, redirecionar para a página meus decks
      // useNavigate()('/home');
    } else {
      throw response.data.message;
    }

    return response.data;
  } catch (error) {
    console.error('Erro ao incluir usuário:', error);
    throw error;
  }
};