import React from 'react';
import './App.css';

function Ticket(props) {
  const { ticket } = props;
  const { id } = ticket;
  const { title } = ticket;
  const { content } = ticket;
  const { userEmail } = ticket;
  const { creationTime } = ticket;
  const { labels } = ticket;
  return (
    <div className={props.className} key={id}>
      <button className="hideTicketButton" onClick={() => props.hideTicket(id)}>Hide</button>
      <h3>{title}</h3>
      <p>{content}</p>
      <footer>
        By
        {userEmail}
        {' '}
        | time:
        {creationTime}
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
