import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city, setCity] = useState('');
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a2a7778428c15c267a16e9f918692506";
    
    let getWeather = async () => {
        try{
             let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
    
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_Like,
            weather: jsonResponse.weather[0].description,
            
        }
        console.log(result);
        return result;

        } catch (err) {
            setError('Failed to fetch weather data');
            console.error(err);
            return null;
        }
       
    }
        

    let handleChange = (e) => {
        setCity(e.target.value);
        
    }

    let handleSubmit = async (e) => {
        try{
          e.preventDefault();
          console.log(city);
          setCity('');
          let newinfo=await getWeather();
          updateInfo(newinfo);

        }catch (err) {
            setError(true);
            
        }
       
    }
    return(
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p>No such place exists!</p>}
            </form>
        </div>
    );
}