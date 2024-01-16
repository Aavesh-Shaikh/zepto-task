import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSearch from './components/UserSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserSearch/>
    </>
  )
}

export default App