import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Event from '../Event/event';
import CurrentWeather from '../CurrentWeather/currentweather';
import Activity from '../Activity/activity';
import Hourly from '../Hourly/hourly';
import './dashboard.css';
const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [cityName, setCityName] = useState('Bengaluru');
  const [date, setDate] = useState('');
const apikey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL;
  const getWeatherData = async (cityName, date) => {
    try {
      const today = new Date();
      const formattedDate = date || today.toISOString().split('T')[0];
      
      const response = await axios.get(weatherApiUrl, {
        params: {
          key: apikey,
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
