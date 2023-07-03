import React, { useState } from 'react';
import { Button, Container, Form, TextMuted } from "./styles";
import { ReactComponent as LogoName } from "../../../assets/logo_with_name.svg";
import { sendLogin } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<Props> = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await sendLogin(email, password);
      setIsAuth(response?.token ? response?.token !== '' : false);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <LogoName style={{ maxWidth: '60%' }} />
        <input
          className='form-control'
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='form-control'
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className='btn w-100' onClick={handleLogin}>Entrar</Button>
        <TextMuted>
          Não tem uma conta? <a href="/signup">Cadastre-se</a>
        </TextMuted>
      </Form>
    </Container>
  );
};

export default LoginForm;
