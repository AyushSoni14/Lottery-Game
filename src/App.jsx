import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Lottery />
    </>
  )
}

export default App
