import React, { useState } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Event from '../Event/event';
import CurrentWeather from '../CurrentWeather/currentweather';
import Activity from '../Activity/activity';
import Hourly from '../Hourly/hourly';
import './dashboard.css';

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);

  const getWeatherData = async (cityName, date) => {
    try {
      console.log("userDate",date)
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      const response = await axios.get(`http://api.weatherapi.com/v1/history.json?key=f2cc0a0e73ec4eb7b4955211242005`, {
        params: {
          q: cityName || "Delhi",
          dt: date || formattedDate,
        }
      });
      console.log(response.data)
      setApiData(response.data); // Store the historical weather API response in the state
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

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
