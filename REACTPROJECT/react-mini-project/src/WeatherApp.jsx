import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 26.84,
        temp_min: 24.84,
        temp_max: 28.84,
        humidity: 60,
        weather: "Haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Weather App by Jay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}