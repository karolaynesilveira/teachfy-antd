const storagePrefix = 'teachfy_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`) as string);
  },
  setUser: (user: any) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  clearUser: () => {
    window.localStorage.removeItem(`${storagePrefix}user`);
  },
};

export default storage;