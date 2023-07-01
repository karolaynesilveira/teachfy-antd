import { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import ProtectedRoute from '../ProtectedRoute';
import usePersistedState from '../../hooks/usePersistedState';
import Menu from '../../components/elements/Menu';

import GlobalStyle from '../../styles/global';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import CommunityPage from '../../pages/CommunityPage';
import ProfilePage from '../../pages/ProfilePage';

export default function AppRoutes() {
  const [theme, setTheme] = usePersistedState('theme', 'light');
  const [currentTheme, setCurrentTheme] = useState(theme === 'light' ? light : dark);
  const [isAuth, setIsAuth] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setCurrentTheme(currentTheme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Fragment>
        <Menu isAuth={isAuth} toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>}/>
          <Route path="/community" element={<CommunityPage/>} />

          <Route path='/' element={<ProtectedRoute isAuth={isAuth}/>}>
            <Route path='/profile' element={<ProfilePage/>}/>
            {/* <Route path="/decks/novo-deck" element={<NewDeckPage/>}/> */}
            {/* <Route path="/decks/deck/avaliativo" element={<DeckAvaliativoPage/>}/> */}
            {/* <Route path="/decks/novo-deck/avaliativo" element={<NewDeckAvaliativoPage/>}/> */}
            {/* <Route path="/decks/novo-deck/flashcard" element={<NewDeckFlashCardPage/>}/> */}
            {/* <Route path="/decks/novo-deck/flashcard/byMe" element={<NewDeckFlashCardByMePage/>}/> */}
            {/* <Route path="/decks/meus-decks" element={<MyDecksPage/>}/>  */}
            {/* <Route path="/decks/novo-deck/avaliativo/byMe" element={<NewDeckAvaliativoByMePage/>}/> */}
            {/* <Route path="/decks/novo-deck/avaliativo/byIA" element={<NewDeckAvaliativoByIAPage/>}/> */}
            {/* <Route path="/decks/novo-deck/flashcard/byAI" element={<NewDeckFlashCardPage/>}/> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Fragment>
    </ThemeProvider>
  );
}
