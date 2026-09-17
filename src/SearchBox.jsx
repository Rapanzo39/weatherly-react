import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import {useState} from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({updateWeatherInfo}){
   
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   
      const [city, setCity] = useState("");
      const [error, setError] = useState(false);
    
    let getWeatherInfo = async () =>{
     
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes =  await res.json();
      
      let result = {
        temp : jsonRes.main.temp,
        city : jsonRes.name,
        country : jsonRes.sys.country,
        humidity : jsonRes.main.humidity,
        feelslike : jsonRes.main.feels_like,
        weather : jsonRes.weather[0].description,
          };
      console.log(result);
      return result; 
    };


    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    const handleSubmit = async (e) => {
      try{
          e.preventDefault();
          // console.log(city);
          let newInfo = await getWeatherInfo();
          updateWeatherInfo(newInfo);
          setCity("");
          setError(false);
      }catch{
           setError(true);   
      }   
    };

    return (

        <div className="search-box">
           
            <form onSubmit={handleSubmit}>
                  <TextField 
                    id="outlined-basic" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                  />
                  <br/> <br/>
                  <Button variant="contained" type="submit">
                    Search
                  </Button>
                  {error && <p style={{ color: 'red' }}>No such place exists!</p>}
            </form>
        </div>
       
    );
}