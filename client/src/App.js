import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
// import Ticket from './components/Ticket';
import axios from 'axios';
import './App.css';
import Ticket from './Ticket';
import SearchArea from './SearchArea';

function App() {

  const [tickets, setTickets] = useState([]);
  let visibleTickets = tickets.filter((ticket) => Boolean(ticket.hidden) === false)
  const hidden = tickets.length - visibleTickets.length;
  async function initializeTickets(){
    const result = await axios.get('/api/tickets');                  
    const data = result.data;
    console.log(data);
    setTickets(data);
  }
  function renderTickets(tickets){
      let ticketsHtml = tickets.map((ticket) => {
      return <Ticket key={ticket.id}
                     ticket={ticket}
                     className='ticket'
                     hideTicket={hideTicket}
                      />});
    return ticketsHtml;
  }
  useEffect(() => {
    initializeTickets();
  },[]);
  async function searchTicket(searchText){
    const result = await axios.get('/api/tickets?searchText=' + searchText);                  
    const data = result.data;
    console.log(data);
    setTickets(data);
  }
  function restoreHiddenTickets(){
    setTickets(
      tickets.map((ticket) => {
        if(ticket.hidden = true){
           ticket.hidden = false
           return ticket;
        }
        else return ticket;
      })
    );
  }
  function hideTicket(id){
    setTickets(
      tickets.map((ticket) => {
        if(ticket.id === id){
          ticket.hidden = true;
          return ticket;
        }
        else{
          return ticket;
        }
      })
    );
  }
  return (
    <main>
      <SearchArea onchange={(searchText) => searchTicket(searchText)}
                  resultsCount={tickets.length}
                  hiddenCount={hidden}
                  restore={restoreHiddenTickets}/> 
      <div>{renderTickets(visibleTickets)}</div>
    </main>
  );
}

export default App;
