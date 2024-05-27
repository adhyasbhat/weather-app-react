// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './hourly.css';
// import Slider from "react-slick";
// const Hourly = ({ apiData }) => {
//   console.log(apiData, "apiData");

//   try {
//     if (!apiData) {
//       return <p>No data to display</p>;
//     }

//     const hourlyData = apiData.forecast.forecastday[0].hour;
//     console.log(hourlyData, "hourlyData");
//     const style = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 8,
//       slidesToScroll: 3
//     };
//     return (
//       <div className="m-2 hourBoard d-flex justify-content-center align-items-center">
//         <div className="m-2 w-100">
//           <div className="d-flex justify-content-evenly align-items-center">
//             <div className="temp m-1">
//               <div className="text-center">Hourly Weather</div>
//             </div>
//           </div>
//           <div className="w-100">
//             <Slider {...style}>
//               {hourlyData.map((hour, index) => (
//                 <div key={index} className='hourBox m-2'>
//                   <div className="d-flex align-items-center justify-content-center">
//                   <img className='weatherIcons' src={hour.condition.icon} alt="" />
//                   <div>{hour.temp_c}°C</div>
//                   </div>
//                     <div className='text-center'>{hour.condition.text}</div>
//                     <div className='text-center'>{hour.time.split(' ')[1]}</div>
             
//                 </div>
//               ))}
//             </Slider>
              
        
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error rendering Hourly component:', error);
//     return <p>Error loading data</p>;
//   }
// };

// export default Hourly;
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hourly.css';
import Slider from "react-slick";

const Hourly = ({ apiData }) => {
  console.log(apiData, "apiData");

  try {
    if (!apiData) {
      return <p>No data to display</p>;
    }

    const hourlyData = apiData.forecast.forecastday[0].hour;
    console.log(hourlyData, "hourlyData");

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20px', // Adds padding around the centered slide
    };

    return (
      <div className="m-2 hourBoard px-3 d-flex justify-content-center align-items-center">
        <div className="m-2 w-100">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="temp m-1">
              <div className="text-center"><h5>Hourly Weather</h5></div>
            </div>
          </div>
          <div className="w-100">
            <Slider {...settings}>
              {hourlyData.map((hour, index) => (
                <div key={index} className="hourBox m-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="weatherIcons" src={hour.condition.icon} alt="" />
                    <div>{hour.temp_c}°C</div>
                  </div>
                  <div className="text-center">{hour.condition.text}</div>
                  <div className="text-center">{hour.time.split(' ')[1]}</div>
                </div>
              ))}
            </Slider>
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
