import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>q
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
mport { useEffect, useState } from 'react';
function App() {
 const [message, setMessage] = useState('');
 useEffect(() => {
 fetch('/api/hello')
 .then((response) => response.text())
 .then((data) => setMessage(data));
 }, []);
 return (
 <div>
 <h1>Frontend</h1>
 <p>Esta aplicación se conecta al backend pidiéndole una respuesta</p>
 <p>Backend response: {message}</p>
 </div>
 );
}
export default App;
