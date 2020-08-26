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
    response.send(resultTickets);
  } else {
    response.send(tickets);
  }
});

app.post('api/tickets/:ticketId/done', async (request) => {
  const data = await fs.readFile('data.json');
  const tickets = JSON.parse(data);
  const index = tickets.indexOf(request.params.ticketId);
  if (index !== -1) {
    tickets[index].done = true;
    // update the json with fs?
  }
});

app.post('api/tickets/:ticketId/undone', (request) => {
  const data = fs.readFileSync('data.json');
  const tickets = JSON.parse(data);
  const index = tickets.indexOf(request.params.ticketId);
  if (index !== -1) {
    tickets[index].done = false;
    // update the json with fs?
  }
});

module.exports = app;
