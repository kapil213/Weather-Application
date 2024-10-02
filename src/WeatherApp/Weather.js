import { useState } from "react";
import InfoBox from "./InfoBox.";
import SearchBox from "./SearchBox";

export default function Weather() {
    let [check, setCheck] = useState(true);
    let [info, setInfo] = useState({
        city: "kujba",
        temp: 35.65,
        tempMin: 35.12,
        tempMax: 35.87,
        feels_like: 34.56,
        humidity: 22,
        description: "few clouds"
    });
    
    let updateInfo = (currdata) => {
        setInfo(currdata);
    }

    let updatecheck=(currdata)=>{
        setCheck(currdata)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center bg-sky-300 text-black">
            <h1 className="text-4xl font-semibold mt-5">Weather App</h1>
            {check ?
                <SearchBox updateInfo={updateInfo} updatecheck={updatecheck} />
                : <InfoBox result={info} updatecheck={updatecheck} />}
        </div>
    )
}