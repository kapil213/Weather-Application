import { Sync } from '@mui/icons-material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SearchBox({ updateInfo, updatecheck }) {

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let url = "http://api.openweathermap.org/data/2.5/weather";
    let url_key = "a52bc79e48253570ae513a0b33c3a497";

    let getWheather = async () =>{

        if(city==="Kujba") {
            return {
                city: "kujba",
                temp: 35.65,
                tempMin: 35.12,
                tempMax: 35.87,
                feels_like: 34.56,
                humidity: 22,
                description: "few clouds"
            };
        }
        try {
            let response = await fetch(`${url}?q=${city}&appid=${url_key}&units=metric`);
            let jsondata = await response.json();
            console.log(jsondata);

            let result = {
                city: city,
                temp: jsondata.main.temp,
                tempMin: jsondata.main.temp_min,
                tempMax: jsondata.main.temp_max,
                feels_like: jsondata.main.feels_like,
                humidity: jsondata.main.humidity,
                description: jsondata.weather[0].description
            }
            //   console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {

        setCity(() => {
            return event.target.value;
        });

        // console.log(event.target.value);
    }

    let handleSubmit = async (event) => {

        try {
            event.preventDefault();
            console.log(city);
            let updatedata = await getWheather();
            console.log(updatedata);
            updateInfo(updatedata);
            setCity("")
            setErr(false);
            updatecheck(false);
        } catch (err) {
            setErr(true);
        }
    }
    return (
        <div className='mt-16 bg-white px-5 py-10 rounded-md shadow-xl shadow-zinc-400'>
            <img src='https://openweathermap.org/themes/openweathermap/assets/img/banner/OpenWeather.svg' className='ml-12'></img>
            <form className='mt-5' onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="Search city"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                {/* <Button variant="contained" type='submit' className='mt-4  bg-blue-700  hover:bg-black text-white font-semibold ...'>Search</Button> 
                */}
                <button className='border px-5 py-1 mt-4  rounded-md bg-blue-700  hover:bg-black text-white font-semibold ...'>Search</button>
                {err && <p className='text-red-600 font-semibold mt-3'>No Such Place Exist!!</p>}
            </form>
        </div>
    )
}