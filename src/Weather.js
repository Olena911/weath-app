import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";
import Icon from "./Icon";


export default function Weather(props){
    const [weather, setWeather]= useState({ready: false });
    const [city, setCity]= useState(props.defaultCity);
function handleResponse(response){
    console.log(response.data);

    setWeather({
        ready:true,
        temperature: (Math.round(response.data.main. temp)),
        wind:response.data.wind.speed,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        icon:response.data.weather[0].icon,
        date: new Date(response.data.dt*1000)
    })
}
function search(){
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);
}

if (weather.ready) {

    return(
    <div className="Weather"> 
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
        <input type="search" onChange={handleCityChange} placeholder="Enter a city..." autoFocus="on" className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    <h1> {weather.city}</h1>
    <ul>
        <li> <FormatDate date={weather.date} /> </li>
        <li className="text-capitalize"> {weather.description} </li>
    </ul>
    <div className="row mt-3">
        <div className="col-sm-6"> 
        <div className="clearfix">
        <Icon code={weather.icon} size={48} />
        
       <span className="temperature"> {weather.temperature} </span> <span className="unit">°C </span>
        </div>
        
        </div>
        <div className="col-sm-6">
            <ul>
                <li>Humidity:{weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
            </ul>
        </div>
    
    </div>
     </div>);
}
else{
search();   
return "Loading ...";
}
}