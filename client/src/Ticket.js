import React from 'react';
import './App.css';

function Ticket(props){
    let ticket = props.ticket;
    const id = ticket.id;
    const title = ticket.title;
    const content = ticket.content;
    const userEmail = ticket.userEmail;
    const creationTime = ticket.creationTime;
    const labels = ticket.labels;
    return <div className={props.className} key={id}>
        <button className="hideTicketButton" onClick={() => props.hideTicket(id)}>Hide</button>
        <h3>{title}</h3>
        <p>{content}</p>
        <footer>By {userEmail} | time:{creationTime}</footer>
        {labels !== undefined ?
         <div className='labelContainer'> {labels.map((label) => <button className='label' key={label}>{label}</button>)}</div>
         :''}
    </div>
}

export default Ticket;