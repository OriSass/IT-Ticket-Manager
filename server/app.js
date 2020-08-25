const express = require('express');
const app = express();
const fs = require('fs').promises;


app.get('/api/tickets', async (request, response) => {
    const data = await fs.readFile('./data.json');
    let tickets = await JSON.parse(data);
    let searchText = request.query.searchText;
    if(searchText){
        const resultTickets = tickets.filter((ticket) => {
            ticket.title.toLowerCase().includes(searchText.toLocaleLowerCase());
        });
        response.send(resultTickets);
    }else{
        response.send(tickets);
    }
});

app.post('api/tickets/:ticketId/done', async(request, response) =>{
    const data = await fs.readFile('data.json');
    let tickets = JSON.parse(data);
    let index = tickets.indexOf(request.params.ticketId);
    if(index !== -1){
        tickets[index].done = true;
        // update the json with fs?
    }
});

app.post('api/tickets/:ticketId/undone', (request, response) =>{
    const data = fs.readFileSync('data.json');
    let tickets = JSON.parse(data);
    let index = tickets.indexOf(request.params.ticketId);
    if(index !== -1){
        tickets[index].done = false;
        // update the json with fs?
    }
});

module.exports = app;