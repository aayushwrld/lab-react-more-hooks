import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseReducer from './concepts/useReducer'
import './App.css'
import ToDoApp from './components/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseReducer /> */}
      <ToDoApp/>
    </>
  )
}

export default App
