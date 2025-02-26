import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState(""); // pass city To get access of city
    let [error, setError] = useState(false);
    
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    // It's Just a Function We need to pass city To get access of city
    let getWeatherInfo = async () => {
    try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
        throw err;
    }
    };



    // handleChange
    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit= async(event) => {
   try{
    event.preventDefault();
    console.log(city);
    setCity("");
    
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setError(false); // Reset the error when a valid city is found
   }catch(err){
    setError("No Such Place Found in Our API");
   }
    };

    return(
        <div className="SearchBox">

        <form onSubmit={handleSubmit}>
        <TextField 
        id="City" 
        label="City Name" 
        variant="outlined"   
        required 
        value={city}
        onChange={handleChange}
        />
        <Button variant="contained" type="submit" style={{padding:"13px"}} >Search</Button>
       
        
        </form>
        <div>{error && <p>No such Place Exists!!</p>}</div>
        </div>
    );
}