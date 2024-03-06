import './App.css';
import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark,toggleDarkness] = useState(false);
  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{isDark,toggleDarkness}}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
