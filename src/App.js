import './App.css';
import { useState } from 'react';
import Page from './components/Page';

function App() {
  const [isDark,toggleDarkness] = useState(false);
  return (
    <Page isDark={isDark} toggleDarkness={toggleDarkness}/>
  );
}

export default App;
