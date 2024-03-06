
const Footer = ({isDark,toggleDarkness})=>{
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