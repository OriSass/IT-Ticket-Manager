import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
// import Ticket from './components/Ticket';
import axios from 'axios';
import './App.css';
import Ticket from './Ticket';

function App() {

  const [tickets, setTickets] = useState([]);

  async function initializeTickets(){
    const result = await axios.get('/api/tickets');                  
    const data = result.data;
    console.log(data);
    setTickets(data);
  }
    function getHtmlTickets(){
    let htmlArr = tickets.map((ticket) => {
      return <Ticket key={ticket.id} ticket={ticket} className='ticket'/>;
    });
    return htmlArr;
  }
  useEffect(() => {
    initializeTickets();
  },[]);
  return (
    <main>
      <div>{getHtmlTickets()}</div>
    </main>
  );
}

export default App;
