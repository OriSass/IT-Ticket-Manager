import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Ticket from './components/Ticket';
import './App.css';
import Ticket from './Ticket';
import SearchArea from './SearchArea';

function App() {
  const [tickets, setTickets] = useState([]);
  const visibleTickets = tickets.filter((ticket) => Boolean(ticket.hidden) === false);
  const hidden = tickets.length - visibleTickets.length;
  async function initializeTickets() {
    const result = await axios.get('/api/tickets');
    const { data } = result;
    setTickets(data);
  }
  function hideTicket(id) {
    setTickets(
      tickets.map((ticket) => {
        if (ticket.id === id) {
          ticket.hidden = true;
          return ticket;
        }

        return ticket;
      }),
    );
  }
  function renderTickets(data) {
    if(data.length !== 0){
      const ticketsHtml = data.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          className="ticket"
          hideTicket={hideTicket}
        />
      ));
      return ticketsHtml;
    }
    else return <div><br /><br /><br /><h1>No results found</h1></div>
  }
  useEffect(() => {
    initializeTickets();
  }, []);
  useEffect(() => {

  }, [])
  async function searchTicket(searchText) {
    const result = await axios.get(`/api/tickets?searchText=${searchText}`);
    const { data } = result;
    setTickets(data);
  }
  function restoreHiddenTickets() {
    setTickets(
      tickets.map((ticket) => {
        if (ticket.hidden === true) {
          ticket.hidden = false;
        }
        return ticket;
      }),
    );
  }
  return (
    <main>
      <SearchArea
        onchange={searchTicket}
        resultsCount={visibleTickets.length}
        hiddenCount={hidden}
        restore={restoreHiddenTickets}
        initialDataLength={tickets.length}
      />
      <div class="main">{renderTickets(visibleTickets)}</div>
    </main>
  );
}

export default App;
