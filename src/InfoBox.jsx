import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1485870458886-d489883a6751?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";
   
     let CLOUD_URL =
        "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1170&auto=format&fit=crop";

    // Get weather description
    const weather = info.weather.toLowerCase();

    // Decide image
    let image;

    if (weather.includes("rain")) {
        image = RAIN_URL;
    } else if (weather.includes("cloud")) {
        image = CLOUD_URL;
    } else if (weather.includes("snow")) {
        image = COLD_URL;
    } else {
        image = HOT_URL;
    }

    let weatherIcon;
    if (weather.includes("rain")) {
        weatherIcon = <ThunderstormIcon />;
    } else if (weather.includes("snow")) {
        weatherIcon = <AcUnitIcon />;
    } else {
        weatherIcon = <SunnyIcon />;
    }

    return (
         <div className="info-box">

            <Card className="weather-card">

                <CardMedia
                    component="img"
                    image={image}
                    alt={info.weather}
                    className="weather-image"
                />

                <CardContent className="weather-content">

                    {/* City + icon */}

                    <div className="city-row">

                        <Typography className="city-name">
                            {info.city}
                        </Typography>

                        <div className="weather-icon">
                            {weatherIcon}
                        </div>

                    </div>


                    {/* Temperature */}

                    <div className="temperature">
                        {info.temp.toFixed(2)}°C
                    </div>


                    {/* Divider */}

                    <div className="divider"></div>


                    {/* Weather details */}

                    <div className="weather-details">

                        <div className="detail">

                            <span className="detail-title">
                                💧 Humidity
                            </span>

                            <strong>
                                {info.humidity}%
                            </strong>

                        </div>


                        <div className="detail">

                            <span className="detail-title">
                                🌡️ Feels like
                            </span>

                            <strong>
                                {info.feelslike.toFixed(2)}°C
                            </strong>

                        </div>


                        <div className="description">

                            <em>
                                {info.weather}
                            </em>

                        </div>

                    </div>

                </CardContent>

            </Card>

        </div>
    );
}