import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { RxMoon, RxSun } from 'react-icons/rx';

interface Props {
  toggleTheme(): void;
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const title = theme?.title ? theme?.title : 'light';
  const background = theme?.colors.background ? theme?.colors.background : '#fff';

  return (
    <Switch 
      className='themeModeSwitch'
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offHandleColor='#ffc800'
      onHandleColor='#e8e8e8'
      uncheckedHandleIcon={<RxSun className="handleIcon" color="white"/>}
      checkedHandleIcon={<RxMoon className="handleIcon" color="black"/>}
      offColor={background}
      onColor={background}
    />
  );
};
  
export default SwitchTheme;