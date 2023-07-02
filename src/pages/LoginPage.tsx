import { Navigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

interface Props {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ isAuth, setIsAuth }) => {
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <LoginForm setIsAuth={setIsAuth}/>
};

export default LoginPage;