const link = "https://api.weatherstack.com/current?acces_key=762b7005d81db18f2bae166cf816e192";

let store ={
    city: "London",
    feelsllike: 0,
    cmoudcover: 0,
    temperature: 0,
    humidity: 0,
    observationTime: "00:00 AM",
    pressure: 0,
    uvIndex: 0,
    vesibility: 0,
    isDay: "yes",
    weatherDescriptions: "",
    windSpeed: 0
}

const fetchData = async()=>{
    const result = await fetch(`${link}&query=${store.city}`);
    const data = await result.json();

    const {
        current:{
            fellslike, 
            cloudcover, 
            temperature, 
            observation_time:observationTime,
            pressure, 
            uv_index:uvIndex, 
            vesibility, 
            is_day:isDay, 
            weather_descriptions:weatherDescriptions,
            wind_speed:windSpeed
        }
    } = data;
}

store = {
    ...store,
    feelsllike,
    cmoudcover,
    temperature,
    humidity,
    observationTime: observation_time,
    pressure,
    uvIndex: uv_index,
    vesibility,
    isDay: is_day,
    weatherDescriptions: weather_escriptions[0],
    windSpeed: wind_speed
}

fetchData();