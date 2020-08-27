import React from 'react';
import './App.css';

function Ticket(props) {
  const { ticket } = props;
  const { id } = ticket;
  const { title } = ticket;
  let titleArr = [];
  if (title.includes('$')) {
    titleArr = title.split('$');
  }
  const markedTitle = titleArr.length !== 0
    ? (
      <div>
        {titleArr[0]}
        <b>{titleArr[1]}</b>
        {titleArr[2]}
      </div>
    )
    : <div>{title.split('$').join('')}</div>;
  const { content } = ticket;
  const { userEmail } = ticket;
  const date = new Date(ticket.creationTime);
  const creationTime = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const { labels } = ticket;
  return (
    <div className={props.className} key={id}>
      <div className="hideContainer">
        <button className="hideTicketButton" onClick={() => props.hideTicket(id)}>Hide</button>
      </div>
      {markedTitle}

      <p>
        Content:
        {content}
      </p>
      <footer>
        <b>By:</b>
        {' '}
        {' '}
        {userEmail}
        {' '}
        |
        {' '}
        <b>Time of creation:</b>
        {` ${creationTime}`}
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
