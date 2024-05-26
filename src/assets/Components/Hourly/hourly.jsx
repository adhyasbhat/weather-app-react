import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hourly.css'; // Make sure to create this CSS file

const Hourly = ({ apiData }) => {
  console.log(apiData, "apiData");

  try {
    if (!apiData) {
      return <p>No data to display</p>;
    }

    const hourlyData = apiData.forecast.forecastday[0].hour;
    console.log(hourlyData, "hourlyData");

    return (
      <div className="m-2 hourBoard d-flex justify-content-center align-items-center">
        <div className="m-2 w-100">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="temp m-1">
              <div className="text-center">Hourly Weather</div>
            </div>
          </div>
          <div className="d-flex">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} centerMode={true} centerSlidePercentage={25}>
              {hourlyData.map((hour, index) => (
                <div key={index} className="carousel-item">
                  <div className='carouselBox'>
                    <img className='weatherIcons' src={hour.condition.icon} alt="" />
                    <div>{hour.temp_c}°C</div>
                    <div>{hour.condition.text}</div>
                    <div>{hour.time}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Hourly component:', error);
    return <p>Error loading data</p>;
  }
};

export default Hourly;
