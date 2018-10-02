const API_KEY = '4b64cfaa17d9881076d6beedb99c7b83';
const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}