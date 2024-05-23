import "./activity.css";
import React from 'react';
import Select from 'react-select';

class ActivityComponent extends React.Component {
  setValues(values) {
    console.log(values);
  }

  render() {
    const options = [
      {
        value: 'Traveller',
        label: 'Traveller'
      },
      {
        value: 'Farmer',
        label: 'Farmer'
      }
    ];

    return (
      <div className="activity m-2 d-flex justify-content-center align-items-center">
        <div className="m-2">
          <div className="activityTitle text-center">
            <h5>Activity</h5>
          </div>
          <div className="activityType">
            <Select className="activityDropdown" options={options} onChange={(values) => this.setValues(values)} />
          </div>
          <div className="recommendation my-2">
            <div className="recommendationTitle text-center">
              <h5>Recommendations</h5>
            </div>
            <div className="recommendationList">
              {/* Recommendation list items will go here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityComponent;
