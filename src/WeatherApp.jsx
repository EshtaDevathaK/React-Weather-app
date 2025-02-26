import {useState} from "react";

import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 20.67,
        humidity: 56,
        temp: 21.05,
        tempMax: 21.05,
        tempMin: 21.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
<div style={{textAlign: "center"}}>
    
    <h2>Weather App By Student</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
</div>
    );
}