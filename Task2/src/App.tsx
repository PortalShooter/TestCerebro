import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <div className="App">
      <header className="App-header">
        <Input 
          value={inputValue}
          setValue={setInputValue}
          className={'red'}
         />
      </header>
    </div>
  );
}

export default App;
