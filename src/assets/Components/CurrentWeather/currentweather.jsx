import humidity from '../../Images/cloud.png';
import precipitation from '../../Images/rain.png';
import wind from '../../Images/storm.png';
import './currentweather.css';
function CurrentWeather() {
    return(
        <>
        <div className="m-2 weatherBoard d-flex justify-content-center align-items-center">
            <div className='m-2'>
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className='weatherIconDiv m-1'>
                        <img className='weatherIcon' src={humidity} alt="" />
                    </div>
                    <div className="temp m-1">
                        <div className="tempName text-center">
                        Patchy light drizzle
                        </div>
                        <div className="tempValue text-center">32</div>
                        <div className="cityName text-center">Bengaluru India</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="box d-flex justify-content-center align-items-center">
                        <div>
                        <div className="humidityIconDiv text-center">
                            <img className='humidityIcon' src={humidity} alt="humidity" />
                        </div>
                        <div className="humidityValue text-center">80</div>
                        <div className="humidity text-center">Humidity</div>
                        </div>
                    </div>
                    <div className="box mx-2 d-flex justify-content-center align-items-center">
                        <div>
                        <div className="precipitationIconDiv text-center">
                            <img className="precipitationIcon"src={precipitation} alt="precipitation" />
                        </div>
                        <div className="precipitationValue text-center">0.0</div>
                        <div className="precipitation text-center">Precipitation</div>
                        </div>
                    </div>
                    <div className="box d-flex justify-content-center align-items-center">
                        <div>
                        <div className="windIconDiv text-center">
                            <img className="windIcon" src={wind} alt="wind" />
                        </div>
                        <div className="windValue text-center">6.2</div>
                        <div className="wind text-center">Wind speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CurrentWeather;