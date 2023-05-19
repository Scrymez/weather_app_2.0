export const getWeatherData = async (city) => {
   try {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42b173fd6ddb3a9d276e0c89bb666695&lang=ru`
         );
      
      return await response.json();
   } catch (error) {
      console.error(error);
   }
}