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
      <h2>
        {titleArr[0]}
        <b className="searchedText">{titleArr[1]}</b>
        {titleArr[2]}
      </h2>
    )
    : <h2>{title.split('$').join('')}</h2>;
  const { content } = ticket;
  const { userEmail } = ticket;
  const date = new Date(ticket.creationTime);
  const creationTime = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const { labels } = ticket;
  const { done } = ticket;
  return (
    <div className={props.className} key={id}>
      <div className="ticketHeader">
        <div className="titleStyle">
          {markedTitle}
        </div>
        <div>
          <button
            className="hideTicketButton"
            onClick={() => props.hideTicket(id)}
          >
            Hide
          </button>
        </div>
      </div>
      <p className="contentStyle">
        <b>Content: </b>
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
