import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ result,updatecheck }) {

    let hot_url = "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/408868952_818864203482916_2064637691397564660_n.jpg?ccb=11-4&oh=01_Q5AaIB4iWNvJGTvdA5iQDbv1MdqIBZwAhmB3gBFBYzIeKSdd&oe=66461DD9&_nc_sid=e6ed6c&_nc_cat=110";
    let cold_url = "https://cdn.pixabay.com/photo/2024/02/26/20/48/landscape-8598886_1280.jpg";
    let rain_url = "https://st4.depositphotos.com/4876263/20564/i/450/depositphotos_205644092-stock-photo-heavy-rain-falls-road-which.jpg";

    let onback=()=>{
        updatecheck(true);
        console.log("back btn was clicked")
    }
    return (
        <>
            {/* <div className='mt-4'>
                <h1 className="text-2xl font-semibold">Weather Info --> {result.description}
                </h1>
            </div> */}
            <div className='ml-2 mr-2 mt-4 text-center' >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={result.humidity > 60 ? rain_url : (result.temp > 15 ? hot_url : cold_url)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {result.city}
                            <span className='ml-2 mb-2'> {result.humidity > 60 ? <ThunderstormIcon /> : (result.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h1 className='font-semibold'>Temperature : {result.temp}.&deg;C</h1>
                            <h1 className='mt-2 font-semibold'>Max_Temperature : {result.tempMax}&deg;C</h1>
                            <h1 className='mt-2 font-semibold'>Min_Temperature : {result.tempMin}&deg;C</h1>
                            <h1 className='mt-2 font-semibold'>Humidity : {result.humidity}</h1>
                            <h1 className='mt-2'>The Weather can be described as {result.description} and feels Like : {result.feels_like}</h1>
                        </Typography>
                    </CardContent>
                     <button className='border px-5 py-1 mb-3 rounded-md bg-blue-700  hover:bg-black text-white font-semibold ...'onClick={onback}>Back</button>
                </Card>
            </div>
        </>
    )
}