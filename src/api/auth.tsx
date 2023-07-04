import { axios } from "../libs/axios";
import storage from "../utils/storage";


export const sendLogin = async (email:string, password:string) => {
  try {
    const response = await axios.post('/login', {
      email: email,
      password: password
    });

    storage.setToken(response.data.token);
    storage.setUser(response.data.user);
    return response.data;

  } catch (error) {

    throw error;
  }
};