import React, {useState} from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

function App() {
  const [username, setUsername] = useState("Dougy")

  const handleInput = (input) =>{
    setUsername(input)
  }
  
  return (
    <div>
      <UserInput defaultUsername={username} handleInput={handleInput}/>
      <UserOutput username="Jonboi"/>
      <UserOutput username={username}/>
    </div>
  );
}

export default App;
