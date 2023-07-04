import { axios } from "../libs/axios";
import { User } from "../models/types/User";
import storage from "../utils/storage";

export const createUser = async (user: User) => {
  try {
    const response = await axios.post(`/users`, user);
  
    storage.setToken(response.data.token);
    storage.setUser(response.data.user);
    return response.data;
  } catch (error) {
    console.error('Erro ao incluir usuário:', error);
    throw error;
  }
};


export const updateUser = async (formData: FormData) => {
  try {
    const response = await axios.put(`users`, formData);
    return response;
  } catch (error) {
    throw new Error('Erro ao alterar o dados do usuário: ' + error);
  }
};
