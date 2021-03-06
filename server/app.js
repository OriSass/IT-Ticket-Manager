const express = require('express');
const app = express();
const fs = require('fs').promises;

app.get('/api/tickets', async (request, response) => {
  const data = await fs.readFile('./data.json');
  const tickets = await JSON.parse(data);
  const { searchText } = request.query;
  if (searchText) {
    const resultTickets = tickets.filter((ticket) => {
      const lowerTitle = ticket.title.toLowerCase();
      const lowerSearchText = searchText.toLocaleLowerCase();
      return lowerTitle.includes(lowerSearchText);
    });
    // a $ sign is added in both sides of the searched text for emphasizing it on client side
    const highLighted = resultTickets.map((ticket) => {
      const lowerTitle = ticket.title.toLowerCase();
      const lowerSearchText = searchText.toLocaleLowerCase();
      const dividedTitle = lowerTitle.split(lowerSearchText);
      dividedTitle[0] += (`$${lowerSearchText}$`); //
      ticket.title = dividedTitle[0] + dividedTitle[1]; // eslint-disable-line no-param-reassign
      return ticket;
    });
    response.send(highLighted);
  } else {
    response.send(tickets);
  }
});

app.post('/api/tickets/:ticketId/done', async (request, response) => {
  const data = await fs.readFile('data.json');
  const tickets = JSON.parse(data);
  let ticketId = request.params.ticketId;
  let updatedTicket = {};
  let updatedTickets = tickets.map(ticket => {
    if(ticket.id == ticketId){
      updatedTicket = ticket;
      ticket.done = true;
      return ticket;
    }  
    else return ticket;
  });
  fs.writeFile('data.json', JSON.stringify(updatedTickets), (err) => {
    if (err) {
      throw err;
    };
  });
  console.log('The file has been saved!');
  response.send(updatedTicket);
});

app.post('/api/tickets/:ticketId/undone', async (request, response) => {
  const data = await fs.readFile('data.json');
  const tickets = JSON.parse(data);
  let ticketId = request.params.ticketId;
  let updatedTicket = {};
  let updatedTickets = tickets.map(ticket => {
    if(ticket.id == ticketId){
      updatedTicket = ticket;
      ticket.done = false;
      return ticket;
    }  
    else return ticket;
  });
  fs.writeFile('data.json', JSON.stringify(updatedTickets), (err) => {
    if (err) {
      throw err;
    };
  });
  console.log('The file has been saved!');
  response.send(updatedTicket);
});

module.exports = app;
