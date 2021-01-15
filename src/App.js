import React, { useEffect, useState } from 'react';
import Comment from './comment';

function App() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(
    () => {
      fetch("https://fourdragon.azurewebsites.net").then(data => data.json()).then(data => setMessages([...data]));
    }, []
  );

  const submit = () => {
    setMessages(messages => [...messages, input]);
    setInput('');
    fetch("https://fourdragon.azurewebsites.net", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({name: name, input: input}),
    }).then(data => data.json()).then(data => setMessages([...data]));

  }
  return (
    <div className='app'>
      <div>
        <label htmlFor={'name'} >恁滴名字</label>
        <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor={'input'} >恁想说滴话</label>
        <textarea id='input' type='text' value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={submit}>Submit</button>
      </div>
      <hr />

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
