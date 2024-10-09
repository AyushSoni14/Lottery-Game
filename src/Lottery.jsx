
import { useState } from "react";
import './Lottery.css'
import { getTicket , sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery ({n=3, winningSum=15}) {
  let [ticket, setTicket] = useState(getTicket(n));
  let isWinning = sum(ticket)===winningSum;
  let buyTicket = () =>{
   setTicket(getTicket(n))
  }
  return (<div>
    <h1>Lottery Game </h1>
   <Ticket ticket={ticket}/>
    <br></br>
    <button onClick={buyTicket}>Buy New Ticket</button>
    <h3>{isWinning && "Congratulations You Won!"}</h3>
  </div>
  )
}