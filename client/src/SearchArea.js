import React from 'react';
import './App.css';

function SearchArea(props){
    // add feature bold on text that was searched
    return (
        <div className="searchArea">
            <div>
               <input id="searchInput"
               onChange={(event) => props.onchange(event.target.value)}
               placeholder='Search ticket...'
               ></input>
            </div>
            <div>
                <label>Got {props.resultsCount} results</label>
                <div>
                    <span id="hideTicketsCounter">{props.hiddenCount !== 0 ?
                     props.hiddenCount : 0}</span>
                     <span>  hidden tickets </span> 
                    <button id="restoreHideTickets" onClick={() => props.restore()}>Restore</button>
                </div>
            </div>
        </div>
    );
}

export default SearchArea;
