import React, { useState } from 'react';
import searchIcon from '../../Images/search.png';
import './Search.css';

const Search = ({ onSubmit, onDateSubmit }) => {
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const searchCity = () => {
    if (date) {
      onDateSubmit(cityName, date); // Call the historical weather API if date is provided
    } else {
      onSubmit(cityName); // Call the current weather API if no date is provided
    }
  };

  return (
    <div className="searchBlock m-2 d-flex justify-content-center">
      <div>
        <div className="searchcityDiv d-flex">
          <input
            className="searchBar m-2 p-2"
            type="text"
            placeholder="Search for city"
            value={cityName}
            onChange={handleInputChange}
          />
          <button className="searchButton my-2" onClick={searchCity}>
            <img className="searchIcon" src={searchIcon} alt="search icon" />
          </button>
        </div>
        <div className="searchDate m-2">
          <input
            className='dateBar p-2'
            type="date"
            placeholder='YYYY-MM-DD'
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
