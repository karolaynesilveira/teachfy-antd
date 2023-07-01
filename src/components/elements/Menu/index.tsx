import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../NavBar";
import SideBar from "../SideBar"
import Sidebar from "../SidebarMenu/Sidebar";
import SwitchTheme from '../SwitchTheme';
import { Container } from './styles';

interface Props {
  isAuth: boolean;
  toggleTheme(): void;
}

const Menu: React.FC<Props> = ({ isAuth, toggleTheme}) => {
  const hide = ['/login', '/signup'];
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(hide.indexOf(location.pathname) < 0);
  }, [location]);

  if (showMenu) {
    if (isAuth) {
      // return <SideBar toggleTheme={toggleTheme}/>;
      return <Sidebar />;
    }
    return <NavBar toggleTheme={toggleTheme}/>;
  }
  return (
    <Container>
      <SwitchTheme toggleTheme={toggleTheme}/>
    </Container>
  )
};
  
export default Menu;