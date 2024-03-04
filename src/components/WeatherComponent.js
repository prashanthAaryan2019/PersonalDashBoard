import axios from 'axios'
import { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { fetchWeatherRequest,fetchWeatherSuccess,fetchWeatherFailure } from '../store/weatherActions'
import GoToButton from './GoHomeButtonComponent'
import styles from '../styles/weather.module.css'


export default function WeatherComponent(){

    const {loading,weather,error} = useSelector(state=>state.weather)
    const dispatch = useDispatch()

    useEffect( ()=>{
        const fetchWeather = async ()=>{

            dispatch(fetchWeatherRequest())
            try{
             const response = await axios.get(
                 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=753acabd51008fbf1a0ecf78426021dd'
             )
             dispatch(fetchWeatherSuccess(response.data))
            } catch(error){
             dispatch(fetchWeatherFailure(error.message))
            } } 
         if(!weather){
            fetchWeather();
         }}, [dispatch, weather] )
   
      return(
        <div>
        {loading && <p>Loading...</p>}
      { weather && (
        <div className={styles.weather}>
        <div>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
        </div>
        <GoToButton/>
        </div>
         )}
        {error && <p>Error:{error}</p>}
        
      </div>
 
      )
     
}