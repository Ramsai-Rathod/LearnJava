import { useState } from 'react'
import './App.css'
import AdjustmentForm from './pages/AdjustmentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdjustmentForm/>
    </>
  )
}

export default App
