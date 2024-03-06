import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = ()=>{
  const {isDark,toggleDarkness} = useContext(ThemeContext);

  const toggleTheme = () =>{
    toggleDarkness(!isDark);
  };

  return(
    <footer
      className='footer'
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
      }}
    >
      <button className='button' onClick={toggleTheme}>
        {isDark?'Light Mode':'Dark Mode'}
      </button>
    </footer>
  );
}

export default Footer;