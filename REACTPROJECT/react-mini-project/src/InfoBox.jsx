import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";
    return(
    <div className="InfoBox">
    
        <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL: info.temp > 10 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 10 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>
                <p>Temperature: {info.temp}°C</p>
                <p>Humidity: {info.humidity}%</p>
                <p>Min Temperature: {info.temp_min}°C</p>
                <p>Max Temperature: {info.temp_max}°C</p>
                <p>The weather can be described as <i>{info.weather}</i>  and Feels Like: {info.feelsLike}°C</p>
                
            </div>
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    
    </div>
         
     
    ); 
   
}