import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Event from '../Event/event';
import CurrentWeather from '../CurrentWeather/currentweather';
import Activity from '../Activity/activity';
import Hourly from '../Hourly/hourly';
import './dashboard.css';

import.meta.env
console.log(import.meta.env.VITE_SOME_KEY)
const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [cityName, setCityName] = useState('Bengaluru');
  const [date, setDate] = useState('');

  const getWeatherData = async (cityName, date) => {
    try {
      const today = new Date();
      const formattedDate = date || today.toISOString().split('T')[0];
      
      const response = await axios.get(`http://api.weatherapi.com/v1/history.json?key=f2cc0a0e73ec4eb7b4955211242005`, {
        params: {
          q: cityName,
          dt: formattedDate,
        }
      });
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  useEffect(() => {
    getWeatherData(cityName, date);
  }, [cityName, date]);

  const handleSearchSubmit = (newCityName, newDate) => {
    setCityName(newCityName);
    setDate(newDate);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="left">
        <div className="search_col">
          <Search onSubmit={handleSearchSubmit} />
        </div>
        <div className="event_col">
          <Event apiData={apiData}/>
        </div>
      </div>
      <div className="right">
        <div className="d-flex">
          <div className="weather_col">
            <CurrentWeather apiData={apiData} />
          </div>
          <div className="activity_col">
            <Activity apiData={apiData} />
          </div>
        </div>
        <div className="hourly_col"><Hourly apiData={apiData}/></div>
      </div>
    </div>
  );
};

export default Dashboard;
