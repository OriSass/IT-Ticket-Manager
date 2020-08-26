import React from 'react';
import './App.css';

function SearchArea(props) {
  // add feature bold on text that was searched
  return (
    <div className="searchArea">
      <div>
        {props.resultsCount < props.initialDataLength ?
        <label className="results">
          Got
          {' '}
          {props.resultsCount}
          {' '}
          results
        </label>:<label className="results">All Tickets</label>}

        {props.hiddenCount !== 0
          ? (
            <div>
              <span id="hideTicketsCounter">
                {props.hiddenCount}
              </span>
              <span>  hidden tickets </span>
              <button id="restoreHideTickets" onClick={() => props.restore()}>Restore</button>
            </div>
          )
          : ''}
      </div>
      <div>
        <input
          id="searchInput"
          onChange={(event) => props.onchange(event.target.value)}
          placeholder="Search ticket..."
        />
      </div>

    </div>
  );
}

export default SearchArea;
