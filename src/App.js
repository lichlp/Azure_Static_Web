import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const submit = () => {
    setMessages(messages => [...messages, input]);
    setInput('');
  }
  return (
    <div className='app'>
      <input className='input' type='text' value={input} onChange={e=>setInput(e.target.value)}/>
      <button onClick={submit}>Submit</button>
      <ol>
        {
          messages.map(
            (value) => (
              <li>
                {value}
              </li>
            )
          )
        }
      </ol>
    </div>
  )
}

export default App;
