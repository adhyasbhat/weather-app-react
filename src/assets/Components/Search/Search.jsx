import React, { useState } from 'react';
import searchIcon from '../../Images/search.png';
import './Search.css';

const Search = ({ onSubmit }) => {
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    if(cityName ==""){
      return alert("Please enter city name first")
    }
    searchCity(cityName,e.target.value)
  };

  const searchCity = () => {
    onSubmit(cityName, date); // Always call onSubmit with both cityName and date
  };

  return (
    <div className="searchBlock m-2 d-flex justify-content-center">
      <div className='w-100'>
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
            className="dateBar p-2"
            type="date"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
