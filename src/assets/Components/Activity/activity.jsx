import React, { useState } from 'react';
import Select from 'react-select';
import "./activity.css";
import { recommendation } from '../recommendation';

const ActivityComponent = ({apiData}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const setValues = (values) => {
    setSelectedOption(values);
    console.log(values.value);
    const res = recommendation(apiData.forecast.forecastday[0].day.avgtemp_c,apiData.forecast.forecastday[0].day.avghumidity,apiData.forecast.forecastday[0].day.maxwind_kph,values.value);
    setRecommendations(res);
  };

  const options = [
    { value: 'Traveller', label: 'Traveller' },
    { value: 'Farmer', label: 'Farmer' }
  ];

  return (
    <div className="activity m-2 d-flex justify-content-center align-items-center">
      <div className="m-2 w-100">
        <div className="activityTitle text-center">
          <h5>Activity</h5>
        </div>
        <div className="activityType">
          <Select 
            className="activityDropdown" 
            options={options} 
            onChange={setValues} 
            value={selectedOption}
          />
        </div>
        <div className="recommendation my-2">
          <div className="recommendationTitle text-center">
            <h5>Recommendations</h5>
          </div>
          <div className="recommendationList p-2">
            {recommendations && recommendations.length > 0 ? (
              recommendations.map((rec, index) => (
                <div key={index} className="recommendationItem">
                  <div><strong>Activity:</strong> {rec.Activity}</div>
                  <div><strong>Tips:</strong> {rec.Tips}</div>
                </div>
              ))
            ) : (
              <div>No recommendations available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
