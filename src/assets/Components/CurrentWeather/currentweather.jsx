import React from 'react';
import humidity from '../../Images/cloud.png';
import precipitation from '../../Images/rain.png';
import wind from '../../Images/storm.png';
import './currentweather.css';

const CurrentWeather = ({ apiData }) => {
  return (
    console.log(apiData, "apiDataincurrent"),
    <div className="m-2 weatherBoard d-flex justify-content-center align-items-center">
      <div className='m-2'>
        {apiData ? (
          
        
          <>
         
            <div className="d-flex justify-content-evenly align-items-center">
              <div className='weatherIconDiv m-1'>
                <img className='weatherIcon' src={apiData.forecast.forecastday[0].day.condition.icon} alt="" />
              </div>
              <div className="temp m-1">
                <div className="tempName text-center">{apiData.forecast.forecastday[0].day.condition.text}</div>
                <div className="tempValue text-center">{apiData.forecast.forecastday[0].day.avgtemp_c}°C</div>
                <div className="cityName text-center">{apiData.location.name}, {apiData.location.country}</div>
              </div>
            </div>
            <div className="d-flex">
              <div className="box d-flex justify-content-center align-items-center">
                <div>
                  <div className="humidityIconDiv text-center">
                    <img className='humidityIcon' src={humidity} alt="humidity" />
                  </div>
                  <div className="humidityValue text-center">{apiData.forecast.forecastday[0].day.avghumidity}</div>
                  <div className="humidity text-center">Humidity</div>
                </div>
              </div>
              <div className="box mx-2 d-flex justify-content-center align-items-center">
                <div>
                  <div className="precipitationIconDiv text-center">
                    <img className="precipitationIcon" src={precipitation} alt="precipitation" />
                  </div>
                  <div className="precipitationValue text-center">{apiData.forecast.forecastday[0].day.condition.totalprecip_in}</div>
                  <div className="precipitation text-center">Precipitation</div>
                </div>
              </div>
              <div className="box d-flex justify-content-center align-items-center">
                <div>
                  <div className="windIconDiv text-center">
                    <img className="windIcon" src={wind} alt="wind" />
                  </div>
                  <div className="windValue text-center">{apiData.forecast.forecastday[0].day.maxwind_kph}</div>
                  <div className="wind text-center">Wind speed</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>No data to display</p>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
