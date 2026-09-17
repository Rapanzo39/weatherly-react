import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx';
import {useState} from 'react';
import './Weather.css';

export default function WeatherApp(){

    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        country: "IN",
        feelslike: 24.86,
        humidity: 90,
        temp: 24.05,
        weather: "clear sky"
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    
    return (
        <div style={{textAlign: "center"}}>
            <h1>🌤️ Weatherly</h1>
            <p>Check the weather anywhere in the world</p>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={WeatherInfo} />  
        </div>
    );
}