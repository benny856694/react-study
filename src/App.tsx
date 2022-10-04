import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { countAtom, useStore } from './state'
import { useAtom } from 'jotai'

function App() {
  const [count, setCount] = useAtom(countAtom)
  const {loggedIn, login, logout} = useStore()

  return (
    <div className="App">
      LoggedIn: {loggedIn.toString()}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={login}>
          Login
        </button>
        <button onClick={logout}>
          Logout
        </button>
        <button onClick={()=>setCount(s=>s+1)}>
          +: {count} times
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
