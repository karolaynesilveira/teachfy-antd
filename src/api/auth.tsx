import { axios } from "../libs/axios";
import storage from "../utils/storage";

export const sendLogin = async (email:string, password:string) => {
  try {
    const response = await axios.post('/login', {
      email: email,
      password: password
    });

    if (response.status === 200) {
      storage.setToken(response.data.data.token);
      storage.setUser({id: response.data.data.id, name:response.data.data.name});
      return response.data.data;
    } else {
      throw response.data.message;
    }

  } catch (error) {

    throw error;
  }
};