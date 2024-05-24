import React, { useState } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Event from '../Event/event';
import CurrentWeather from '../CurrentWeather/currentweather';
import Activity from '../Activity/activity';
import './dashboard.css';

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);

  const getWeather = async (cityName) => {
    try {
      // Make an API call with Axios using the city name
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=f2cc0a0e73ec4eb7b4955211242005`, {
        params: { q: cityName }
      });
      setApiData(response.data); // Store the API response in the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getWeatherData = async (cityName, date) => {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/history.json?key=f2cc0a0e73ec4eb7b4955211242005`, {
        params: {
          q: cityName,
          dt: date
        }
      });
      setApiData(response.data); // Store the historical weather API response in the state
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className="left">
        <div className="search_col">
          <Search onSubmit={getWeather} onDateSubmit={getWeatherData} />
        </div>
        <div className="event_col">
          <Event />
        </div>
      </div>
      <div className="right">
        <div className="d-flex">
          <div className="weather_col">
            <CurrentWeather apiData={apiData} />
          </div>
          <div className="activity_col">
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
