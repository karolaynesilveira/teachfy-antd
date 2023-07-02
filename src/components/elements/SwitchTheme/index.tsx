import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { RxMoon, RxSun } from 'react-icons/rx';
import usePersistedState from '../../../hooks/usePersistedState';
import { ThemeConfig } from 'antd';

interface Props {
  toggleTheme(): void;
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const [currentTheme, setCurrentTheme] = usePersistedState('theme', 'light');

  return (
    <Switch 
      className='themeModeSwitch'
      onChange={toggleTheme}
      checked={currentTheme === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offHandleColor='#ffc800'
      onHandleColor='#e8e8e8'
      uncheckedHandleIcon={<RxSun className="handleIcon" color="white"/>}
      checkedHandleIcon={<RxMoon className="handleIcon" color="black"/>}
      // offColor={background}
      // onColor={background}
    />
  );
};
  
export default SwitchTheme;