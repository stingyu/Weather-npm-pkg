#!/usr/bin/env node

var axios = require('axios')
// console.log(process.argv)

var data = {}

if(process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}

axios.get('http://api.jirengu.com/weather.php',data).then((response)=> {
    
    let weatherInfo = response.data.results[0].weather_data[0];
    console.log('Date:'+weatherInfo.date);
    console.log('City:'+response.data.results[0].currentCity);
    console.log('Temp:'+weatherInfo.temperature);
    console.log('Info:'+weatherInfo.weather+','+weatherInfo.wind);
    console.log('PM25:'+response.data.results[0].pm25);


}).catch((error) => {
    console.log(error);
    console.log()
})