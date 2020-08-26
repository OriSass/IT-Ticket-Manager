import React from 'react';
import './App.css';

function Ticket(props) {
  const { ticket } = props;
  const { id } = ticket;
  const { title } = ticket;
  const { content } = ticket;
  const { userEmail } = ticket;
  let date = new Date(ticket.creationTime);
    const creationTime = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  const { labels } = ticket;
  return (
    <div className={props.className} key={id}>
      <button className="hideTicketButton" onClick={() => props.hideTicket(id)}>Hide</button>
      <h3>Title: {title}</h3>
      <p>Content: {content}</p>
      <footer>
        <b>By:</b> {' '}
        {userEmail}
        {' '}
        |  <b>Time of creation:</b>
        {' ' + creationTime}
      </footer>
      {labels !== undefined
        ? (
          <div className="labelContainer">
            {' '}
            {labels.map((label) => <button className="label" key={label}>{label}</button>)}
          </div>
        )
        : ''}
    </div>
  );
}

export default Ticket;
