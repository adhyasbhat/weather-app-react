// import add from "../../Images/add.png";
// import info from "../../Images/info.png";
// import './event.css';
// import ReactTooltip from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
// function eventPlanner(){
//     return(
//         <>
//         <div className="event m-2 d-flex justify-content-center align-items-center">
//             <div className="m-2">

//             <div className="event_header text-center d-flex justify-content-center">
//                 <h5>Event Planner</h5> <span className="mx-1"><img className="infoIcon" src={info} alt="info icon" data-tip data-for="infoTooltip" /> <ReactTooltip id="infoTooltip" place="top" effect="solid">
//           Please select the date before adding the event
//         </ReactTooltip></span>
//             </div>
//             <div className="event_list m-1">

//             </div>
//             <div className="addEvent d-flex">
//             <input className="addEventBar p-2 m-1" type="text" name="" id="" placeholder="Enter the event you want to plan"/>
//             <button className="addButton m-1"><img className="addIcon" src={add} alt="" /></button>
//             </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default eventPlanner;
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import add from '../../Images/add.png';
import info from '../../Images/info.png';
import './event.css';

const EventPlanner = () => {
  return (
    <div className="event m-2 d-flex justify-content-center align-items-center">
      <div className="m-2">
        <div className="event_header text-center d-flex justify-content-center">
          <h5>Event Planner</h5>
          <span className="mx-1">
            <img className="infoIcon" src={info} alt="info icon" data-tip data-for="infoTooltip" />
            <ReactTooltip id="infoTooltip" place="top" effect="solid">
              Please select the date before adding the event
            </ReactTooltip>
          </span>
        </div>
        <div className="event_list m-1"></div>
        <div className="addEvent d-flex">
          <input className="addEventBar p-2 m-1" type="text" placeholder="Enter the event you want to plan" />
          <button className="addButton m-1">
            <img className="addIcon" src={add} alt="add icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPlanner;

