import { getWeatherData } from "./api.mjs"

const app = async() => {
   const weather = await getWeatherData('Махачкала')
   console.log(weather)
}

app()