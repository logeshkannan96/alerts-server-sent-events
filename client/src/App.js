import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('http://localhost:3001/messages'); //listening url

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setMessages((messagesStored) => messagesStored.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, messages]);

  return (
    <div className='alerts-section'>
      {
        messages.map((message, i) =>
          <div key={i} className='card-container'>
              <p className='card-title'>{message.title}</p>
              <p className='card-body'>{message.description}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;