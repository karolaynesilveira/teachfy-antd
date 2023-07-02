import React, { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme, Layout, Menu } from 'antd';
import ProtectedRoute from '../ProtectedRoute';
import usePersistedState from '../../hooks/usePersistedState';
// import Menu from '../../components/elements/Menu';

import GlobalStyle from '../../styles/global';

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
  const [currentTheme, setCurrentTheme] = usePersistedState('theme', 'light');
  const [isAuth, setIsAuth] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { Header, Content, Sider } = Layout;

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ConfigProvider theme={{algorithm: currentTheme == 'dark' ? darkAlgorithm : defaultAlgorithm, token: {colorPrimary: "#3f51b5"}}}>
      <GlobalStyle />
      <Fragment>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" />
            {/* <Menu isAuth={isAuth} toggleTheme={toggleTheme} /> */}
          </Sider>
          <Layout>
            <Header style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path="/community" element={<CommunityPage />} />

                <Route path="/" element={<ProtectedRoute isAuth={isAuth} />}>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/my-decks" element={<MyDecksPage />} />
                  <Route path="/new-deck" element={<NewDeckPage/>} />
                  <Route path="/new-deck/anki" element={<DeckAnkiPage />} />
                  <Route path="/new-deck/avaliativo" element={<DeckAvaliativoPage />} />
                </Route>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    </ConfigProvider>
  );
}
