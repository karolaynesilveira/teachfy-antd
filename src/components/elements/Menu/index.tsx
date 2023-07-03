import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../NavBar";
import SwitchTheme from '../SwitchTheme';
import { Container } from './styles';
import Sidebar from '../SidebarMenu/Sidebar';

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
  console.log(isAuth);
  if (showMenu) {
    if (isAuth) {
      return <Sidebar toggleTheme={toggleTheme}/>;
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