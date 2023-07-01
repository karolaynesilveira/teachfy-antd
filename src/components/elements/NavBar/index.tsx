import { Container, ContainerItem, Title, Button } from './styles';

import { ReactComponent as Logo } from "../../../assets/logo.svg";
import SwitchTheme from '../SwitchTheme';

interface Props {
  toggleTheme(): void;
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {

  return (
    <Container>
      <ContainerItem>
        <Logo width={24} height={24}/>
        <Title>Teachfy</Title>
      </ContainerItem>
      <ContainerItem>
        <Button href="/login">
          Login
        </Button>
        <Button href="/signup">
          Sign Up
        </Button>
        <ContainerItem>
          <SwitchTheme toggleTheme={toggleTheme}/>
        </ContainerItem>
      </ContainerItem>
    </Container>
  );
};
  
export default NavBar;