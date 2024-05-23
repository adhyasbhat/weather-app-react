import { useState } from 'react'
import './App.css'
import Header  from './assets/Components/Header/header' 
import Search from './assets/Components/Search/Search'
import Event from './assets/Components/Event/event'
import CurrentWeather from './assets/Components/CurrentWeather/currentweather'
import Activity from './assets/Components/Activity/activity'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-grid justify-content-center'>
    <Header />
    <div className="row">
      <div className="left">
<div className="search_col"><Search/></div>
<div className="event_col"><Event/></div>
      </div>
      <div className="right">
        <div className="d-flex">
        <div className="weather_col"><CurrentWeather/></div>
        <div className="activity_col"><Activity/></div>
        </div>
        
      </div>
    </div>
     
    </div>
  )
}

export default App
