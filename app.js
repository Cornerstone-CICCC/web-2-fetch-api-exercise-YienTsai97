// YOUR JS CODE HERE
const temp = document.querySelector(".temp")
const windSpeed = document.querySelector(".wind_speed")
const locate = document.querySelector(".location")
const time = document.querySelector(".time")

async function getWeather() {
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch(error){
        console.log("error")
    }
}


async function getData(){
    const data = await getWeather()
    const date = new Date(data.current.time)

    temp.innerHTML = ` <h2>${data.current.temperature_2m}${data.current_units.temperature_2m}</h1>`
    windSpeed.innerHTML = `<h2> Wind speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}  </h2>`
    locate.innerHTML = `<h2> ${data.timezone} </h2>`
    time.innerHTML = `<h2>  Last updated: ${date.toLocaleString()} </h2>`
}

getData()
