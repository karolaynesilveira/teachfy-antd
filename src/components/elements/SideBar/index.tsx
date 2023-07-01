import { FC, useEffect, useState } from 'react';
import SwitchTheme from '../SwitchTheme';

interface Props {
  toggleTheme(): void;
}

const SideBar: FC<Props> = ({ toggleTheme }) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(false);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          //trocar o id para pegar os dados do usuário logado
          const userStorage = localStorage.getItem('userId');
          const userId = parseInt(userStorage ? userStorage : '0');
        //   const userData = await fetchUserData(userId);
        } catch (error) {
          console.log('Erro ao buscar os dados do usuário:', error);
        }
      };
    
      fetchData();
    }, []);
    return (
      <SwitchTheme toggleTheme={toggleTheme}/>
    );
  };
  
  export default SideBar;