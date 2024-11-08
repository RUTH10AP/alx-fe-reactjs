import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Functional_comp.js/Header'
import MainContent from './Functional_comp.js/MainContent'
import Footer from './Functional_comp.js/Footer'
import UserProfile from './Functional_comp.js/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <UserProfile name="ruth" age="24" bio="DO HARD THING" />
    </div>
  );

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
        <Header/>
        <MainContent/>
        <Footer/>
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
