import SwitchTheme from "../components/elements/SwitchTheme";
import LoginForm from "../components/forms/LoginForm";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ setIsAuth }) => {
  return (
    <LoginForm setIsAuth={setIsAuth}/>
  );
};

export default LoginPage;