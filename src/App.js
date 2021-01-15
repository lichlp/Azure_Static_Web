import React, { useEffect, useState } from 'react';
import Comment from './comment';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(
    () => {
      fetch("https://fourdragon.azurewebsites.net").then(data => JSON.parse(data)).then(data => setMessages([...data]));
    }
  );

  const submit = () => {
    setMessages(messages => [...messages, input]);
    setInput('');
  }
  return (
    <div className='app'>
      <input className='input' type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={submit}>Submit</button>
      {
        messages.map(
          (value) => (
            <Comment {...value} />
          )
        )
      }
    </div>
  )
}

export default App;
