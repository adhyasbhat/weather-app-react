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
import axios from 'axios';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const searchCity = () => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=f2cc0a0e73ec4eb7b4955211242005'
    const params = {
      q:cityName
    }
    axios 
    .get(url, {params})
    .then(response =>{
      console.log(response.data)
    
    })
    .catch(error =>{console.log(error)}
    )
  };
  const selectedDate = (e) => {
    const url = 'http://api.weatherapi.com/v1/history.json?key=f2cc0a0e73ec4eb7b4955211242005'
    const params={
      q:cityName,
      dt: e.target.value
    }
    axios
    .get(url, {params})
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{console.log(error)}
    )
  }
  return (
    
    <div className="searchBlock m-2 d-flex justify-content-center">
        <div>

      <div className="searchcityDiv d-flex">
        <input className="searchBar m-2 p-2" type="text" placeholder="Search for city" value={cityName}
            onChange={(e) => setCityName(e.target.value)}/>
        <button className="searchButton my-2" onClick={searchCity}>
          <img className="searchIcon" src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="searchDate m-2">
       <input className='dateBar p-2' type="date" placeholder='YYYY-MM-DD' format ='YYYY-MM-DD' onChange={selectedDate}/>
      </div>
        </div>
    </div>
  );
};

export default Search;
