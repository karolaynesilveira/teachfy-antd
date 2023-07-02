import React, { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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
import NewDeckPage from '../../pages/NewDeckPage';
import DeckAnkiPage from '../../pages/DeckAnkiPage';
import MyDecksPage from '../../pages/MyDecksPage';
import DeckAvaliativoPage from '../../pages/DeckAvaliativoPage';

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
        <Menu isAuth={isAuth} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="/community" element={<CommunityPage />} />

          <Route path="/" element={<ProtectedRoute isAuth={isAuth} />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/my-decks" element={<MyDecksPage />} />
            <Route path="/new-deck" element={<NewDeckPage />}>
              <Route path="anki" element={<DeckAnkiPage />} />
              <Route path="avaliativo" element={<DeckAvaliativoPage />} />
            </Route>
          </Route>
        </Routes>
      </Fragment>
    </ThemeProvider>
  );
}
