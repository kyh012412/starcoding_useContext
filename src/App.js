import './App.css';
import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark,toggleDarkness] = useState(false);
  return (
    <Page />    
  );
}

export default App;
