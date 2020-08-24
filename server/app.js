const express = require('express');
const app = express();
const fs = require('fs');
const { json } = require('express');



app.get('/api/tickets', (request, response) => {
    const data = fs.readFileSync('data.json');
    let tickets = JSON.parse(data);
    let searchText = request.query.searchText;
    if(searchText){
        const resultTickets = tickets.filter((ticket) => {
                    let titleLower = ticket["title"].toLowerCase();
                    return titleLower.indexOf(searchText.toLowerCase()) !== -1
        });
        response.send(resultTickets);
    }
    response.send(tickets);
});

app.post('api/tickets/:ticketId/done', (request, response) =>{
    const data = fs.readFileSync('data.json');
    let tickets = JSON.parse(data);
});

module.exports = app;