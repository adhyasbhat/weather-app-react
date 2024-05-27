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
  
  const getWeatherData = async (cityName = "Bengaluru", date) => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      console.log("userDate", date);
     
      const response = await axios.get(`http://api.weatherapi.com/v1/history.json?key=f2cc0a0e73ec4eb7b4955211242005`, {
        params: {
          q: cityName,
          dt: date || formattedDate,
        }
      });
      console.log(response.data);
      setApiData(response.data); // Store the historical weather API response in the state
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  // Use useEffect to call getWeatherData when the component mounts
  useEffect(() => {
    getWeatherData(); // Fetch weather data for default city "Delhi" and today's date
  }, []);
  
  return (
    <div className="container d-flex justify-content-center">
      <div className="left">
        <div className="search_col">
          <Search onSubmit={getWeatherData} />
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
