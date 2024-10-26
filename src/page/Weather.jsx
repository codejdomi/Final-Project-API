
// import all icon from MUI ICON  and hooks from REACT
import { useState, useEffect }from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import DateRangeIcon from '@mui/icons-material/DateRange';

// import key and host from .env
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const hostKey = import.meta.env.VITE_WEATHER_API_HOST;

// use for access in api
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': hostKey
}
};

const Weather = () => {

    // creating hook to get the data
    const [location, setLocation] = useState('Manila');  // Default location
    const [data, setData] = useState(null);
    const [temperature, setTemperature] = useState([]);
    const [error, setError] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    // fetching the API data
    useEffect(() => {
        const fetchdata = async () => {
          setIsLoading(true)
          const url = `https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${location}&days=3`;
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);  // Checking the data
            setData(result.city);
            setTemperature(result.list);
          } catch (error) {
            console.error(error);
            setError(true);
          } finally {
            setIsLoading(false);
          }
        };
        fetchdata();
      }, [location]);
      
      // set Loading of every reload the page
      if (isloading) {
         return <div>...LOADING</div>
      }

       // set error if the api have a error
      if (error) {
         return <div>Something wrong in your API</div>
      }
      
      // handle function for clicking the search button
      const handleSearch = (e) => {
        e.preventDefault();
        setLocation(e.target.location.value);
      };

  return (
      <>
        {/* Button to back in the HOMEPAGE */}
        <header className=' mt-6 max-w-full flex items-center'>
            <button className='relative left-20 p-2'>
                <Link to='/'>
                    <ArrowBackIosNewIcon/>
                </Link>
            </button>
        </header>

        {/* Section for timezone, search bar for location */}
        <div className='flex items-center justify-center mt-10'>
            <div className='w-3/5 h-96 md:h-72 lg:h-60 bg-barbel rounded-lg shadow-md p-2 text-white'>
                <div className='flex justify-between flex-col gap-4 md:gap-2 lg:gap-1 md:flex-row lg:flex-row p-2'>
                    {data && (
                    <h1 className='flex items-center'>
                        <AccessTimeIcon className="mr-2" /> Timezone: {new Date(data.timezone * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })}
                    </h1>
                    )}
                <div>
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                          <div className="relative w-full">
                              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                              type="text"
                              name="location"
                              placeholder="Search Location Here"
                              className="w-52 md:w-60 lg:w-60 pl-10 pr-4 py-1 border text-blckgray border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          </div>
                          <button
                              type="submit"
                              className="px-4 py-1 bg-barbel rounded-lg hover:bg-whiteez hover:text-black transition "
                          >
                            Search
                          </button>
                    </form>
                </div>
                </div>

                {/* This Section are displaying data in Country, City, Sunrise and Sunset */}
                {data && (
                <div className='flex lg:justify-center md:justify-center items-center p-3 md:p-5 lg:p-6 mt-5'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 md:gap-x-32 md:gap-y-10 lg:gap-x-32 lg:gap-y-10 '>
                        <h1 className='flex items-center'>
                            <FlagIcon className='mr-2 '/>
                            Country : {data.country}
                        </h1>
                        <div className='flex-item-center'>
                            <LocationCityIcon className='mr-2'/> 
                            City : {data.name}
                        </div>
                        <div className='flex items-center'>
                            <WbSunnyIcon className='mr-2'/> 
                            Sunrise : {new Date(data.sunrise * 1000).toLocaleTimeString()}
                        </div>
                        <div className='flex items-center'>
                            <WbTwilightIcon className='mr-2' /> 
                            Sunset : {new Date(data.sunset * 1000).toLocaleTimeString()}
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>

        {/* Display the 3 day Forecast text */}
        <div className='flex justify-center p-2 text-5xl mt-4'>
            <h1 className='font-poppins font-bold text-blueblack '>Today's Forecast</h1>
        </div>
        
        {/* Display the 3 day Forecast */}
        {temperature.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-grayy m-10 rounded-md text-blueblack">
        {temperature.slice(0, 3).map((day, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">
                    <DateRangeIcon /> 
                    Date: {new Date(day.dt * 1000).toLocaleDateString()}
                </h2>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-4">
                    <div className="flex items-center">
                        <AccessTimeIcon className="mr-2 font-semibold" /> 
                        Time: {new Date(day.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex items-center">
                        <ThermostatIcon className="mr-2" /> 
                        Temp: {day.main.temp}°C
                    </div>
                    <div className="flex items-center">
                        <EmojiEmotionsIcon className="mr-2" /> 
                        Feels Like: {day.main.feels_like}
                    </div>
                    <div className="flex items-center">
                        <WaterDropIcon className="mr-2" /> 
                        Humidity: {day.main.humidity}
                    </div>
                    <div className="flex items-center">
                        <CloudQueueIcon className="mr-2" /> 
                        Weather: {day.weather[0].description}
                    </div>
                    <div className="flex items-center">
                        <CloudIcon className="mr-2" /> 
                        Cloudiness: {day.clouds.all} %
                    </div>
                    <div className="flex items-center">
                        <AirIcon className="mr-2" /> 
                        Wind Speed: {day.wind.speed}
                    </div>
                    <div className="flex items-center">
                        <ThunderstormIcon className="mr-2" /> 
                        Rain: {day.rain && day.rain['3h'] ? day.rain['3h'] : 'No data'} mm
                    </div>
                </div>
            </div>
        ))}
        </div>
    )}
    </>
  )
}

export default Weather