import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { FaUser } from 'react-icons/fa';
import Submenu from './Submenu';
// import { fetchUserData } from '../../services/user/getUserData';
import storage from '../../../utils/storage';

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  background-color: #1c1c1e;
  border-bottom: 1px solid #424242;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`;

const SidebarWrap = styled.div``;

const UserSectionWrapper = styled.div`
  border-bottom: 1px solid #424242;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: white;
  justify-content: space-between;
`;

const UserIcon = styled(FaUser)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const UserEmail = styled.span`
  color: white;
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;

const CloseIconWrapper = styled.div`
  margin-left: auto;
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 2rem;
`;


interface UserData {
  name: string;
  email: string;
}

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const showSidebar = () => setSidebar(!sidebar);

  
  useEffect(() => {
    const username = storage.getUser()?.name ? storage.getUser().name : 'Teste';
    const useremail = storage.getUser()?.email ? storage.getUser().email : 'teste@teste.com';
    setUserData({ name: username, email: useremail } as UserData);
  //   const fetchData = async () => {
      // try {
        //trocar o id para pegar os dados do usuário logado
    //     const userStorage = localStorage.getItem('userId');
    //     const userId = parseInt(userStorage ? userStorage : '0');
    //     const userData = await fetchUserData(userId);
    //     setUserData(userData);
    //   } catch (error) {
    //     console.log('Erro ao buscar os dados do usuário:', error);
    //   }
    // };
  
    // fetchData();
  }, []);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          <AiOutlineMenu />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <UserSectionWrapper>
          <UserSection>
            <UserIcon />
            <UserInfo>
              <UserName to="/profile">{userData?.name}</UserName>
              <UserEmail>{userData?.email}</UserEmail>
            </UserInfo>
            <CloseIconWrapper>
              <CloseIcon onClick={showSidebar} />
            </CloseIconWrapper>
          </UserSection>
        </UserSectionWrapper>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
