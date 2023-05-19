import { getWeatherData } from "./api.mjs"
import { createHeader } from "./appHeader.mjs"

const app = async() => {
   const weather = await getWeatherData('Махачкала');
   const header = createHeader(weather.name);
   document.body.append(header);
   console.log(weather);
}

app()