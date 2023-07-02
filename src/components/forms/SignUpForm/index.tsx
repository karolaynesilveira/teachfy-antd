import { useState } from 'react';
import { Button, Container, Form, Logo, TextMuted, TextDanger } from "./styles";
import { createUser } from '../../../api/users';
import { User } from '../../../models/types/User';
import { useNavigate } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();


  const validatePassword = () => {
    if (password !== password_confirmation) {
      setPasswordError('A confirmação de senha não confere.');
    } else {
      setPasswordError('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      setPasswordError('A confirmação de senha não confere.');
      return;
    }

    createUser({ name: name, email: email, password: password, password_confirmation: password_confirmation } as User);
    navigate('/');
  };

  const isSubmitDisabled = password !== password_confirmation || !name || !email || !password;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div style={{alignItems:'left', width: '100%'}}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
          />
          <label htmlFor="password_confirmation">Confirmação de Senha</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            onBlur={validatePassword}
          />
        </div>
        {passwordError && <TextDanger>{passwordError}</TextDanger>}
        <Button type="submit" disabled={isSubmitDisabled}>Cadastrar-se</Button>
        <TextMuted>
          Já tem uma conta? <a href="/login">Faça login</a>
        </TextMuted>
      </Form>
    </Container>
  );
};
  
export default SignUpForm;