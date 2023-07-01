import { useState } from 'react';
import { Button, Container, Form, TextMuted } from "./styles";
import { ReactComponent as LogoName} from "../../../assets/logo_with_name.svg";
import { sendLogin } from '../../../api/auth';


interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<Props> = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await sendLogin(email, password);
      setIsAuth(response?.token ? response?.token != '' : false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Form>
        <LogoName style={{ maxWidth: '60%' }}/>
        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <input 
          type="password" 
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Entrar</Button>
        <TextMuted>
          Não tem uma conta? <a href="/signup">Cadastre-se</a>
        </TextMuted>
      </Form>
    </Container>
  );
};
  
export default LoginForm;