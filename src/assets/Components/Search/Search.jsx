// import searchIcon from '../../Images/search.png';
// import './Search.css';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// function search(){
// return(
//     <>

//     <div className="searchBlock m-2">

//     <div className="searchcityDiv d-flex m-2">
//         <input className='searchBar' type="text" placeholder='Search for city'/>
//         <button className='searchButton'><img className='searchIcon' src={searchIcon} alt = 'search icon'/></button>
//     </div>
//     <div className='searchDate'>
//     <DatePickerComponent id="datepicker" value={this.dateValue} format='yyyy-MM-dd' placeholder='Enter date'/>
//     </div>
//     </div>
//     </>
// )
// }
// export default search;
import React, { useState } from 'react';
import searchIcon from '../../Images/search.png';
import './Search.css';

const Search = () => {
  const [dateValue, setDateValue] = useState(null);

  const handleDateChange = (date) => {
    setDateValue(date.value);
  };

  return (
    <div className="searchBlock m-2 d-flex justify-content-center">
        <div>

      <div className="searchcityDiv d-flex">
        <input className="searchBar m-2 p-2" type="text" placeholder="Search for city" />
        <button className="searchButton my-2">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="searchDate m-2">
       <input className='dateBar p-2' type="date" placeholder='YYYY-MM-DD' format ='YYYY-MM-DD'/>
      </div>
        </div>
    </div>
  );
};

export default Search;
