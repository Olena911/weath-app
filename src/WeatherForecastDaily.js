import React, {useState} from "react";
import  "./WeatherForecastDaily.css";

import axios from "axios";


export default function WeatherForecastDaily(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
    }

    if(loaded){

        return(
            <div className="WeatherForecastDaily"> 
        <div className="row">
            <div className="col-3">
            Something
            </div>
        </div>
         </div>);
         
    } else{
        
    let apiKey = "00ab3146123e7334a496afdac10oft03";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
 
}}