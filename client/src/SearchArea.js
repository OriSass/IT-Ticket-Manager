import React from 'react';
import './App.css';

function SearchArea(props) {
  return (
    <div className="searchArea">
      <div>
        {props.resultsCount < props.initialDataLength
          ? (
            <label className="results">
              Got
              {' '}
              {props.resultsCount}
              {' '}
              results
            </label>
          ) : <label className="results">All Tickets</label>}

        {props.hiddenCount !== 0
          ? (
            <div className="restoreArea">
              <div className="hiddenResults">
                <span id="hideTicketsCounter">
                  {props.hiddenCount}
                </span>
                <span>  hidden tickets </span>
              </div>
              <div>
                <button
                  className="restoreButton"
                  id="restoreHideTickets"
                  onClick={() => props.restore()}
                >
                  Restore
                </button>
              </div>
            </div>
          )
          : ''}
      </div>
      <div>
        <input
          id="searchInput"
          className="searchInput"
          onChange={(event) => props.onchange(event.target.value)}
          placeholder="Search ticket..."
        />
      </div>

    </div>
  );
}

export default SearchArea;
