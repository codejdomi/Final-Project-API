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

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {

    const [location, setLocation] = useState('Philippines');  // Default location
    const [data, setData] = useState(null);
    const [temperature, setTemperature] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
          const url = `https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${location}&days=3`;
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);  // Checking the data
            setData(result.city);
            setTemperature(result.list);
          } catch (error) {
            console.error(error);
          }
        };
        fetchdata();
      }, [location]);
    
      const handleSearch = (e) => {
        e.preventDefault();
        setLocation(e.target.location.value);
      };

  return (
      <>
        <header className=' mt-6 max-w-full flex items-center'>
            <button className='relative left-20 p-2'>
                <Link to='/'>
                    <ArrowBackIosNewIcon/>
                </Link>
            </button>
        </header>
        <div className='flex items-center justify-center mt-10'>
            <div className='w-3/5 h-96 md:h-72 lg:h-60 bg-barbel rounded-lg shadow-md p-2 text-white'>
                <div className='flex justify-between flex-col gap-4 md:gap-2 lg:gap-1 md:flex-row lg:flex-row p-2'>
                    <h1 className='flex items-center'>
                        <AccessTimeIcon className='mr-2'/>Time zone :
                    </h1>
                <div>
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                          <div className="relative w-full">
                              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                              type="text"
                              name="location"
                              placeholder="Search Location Here"
                              className="w-52 md:w-54 lg:w-54 pl-10 pr-4 py-1 border text-blckgray border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div className='flex lg:justify-center md:justify-center items-center p-3 md:p-5 lg:p-6 mt-5'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 md:gap-x-32 md:gap-y-10 lg:gap-x-32 lg:gap-y-10 '>
                        <h1 className='flex items-center'>
                            <FlagIcon className='mr-2 '/>Country :
                        </h1>
                        <div className='flex-item-center'>
                            <LocationCityIcon className='mr-2'/> City :
                        </div>
                        <div className='flex items-center'>
                            <WbSunnyIcon className='mr-2'/> Sunrise :
                        </div>
                        <div className='flex items-center'>
                            <WbTwilightIcon className='mr-2' /> Sunset :
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-grayy m-10 rounded-md text-blueblack">
          {/* Day 1 Forecast Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">
                    Day 1 Forecast
                </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <DateRangeIcon className="mr-2" /> Date :
                        </div>
                        <div className="flex items-center">
                            <ThermostatIcon className="mr-2" /> Temperature :
                        </div>
                        <div className="flex items-center">
                            <EmojiEmotionsIcon className="mr-2" /> Feels Like :
                        </div>
                        <div className="flex items-center">
                            <WaterDropIcon className="mr-2" /> Humidity :
                        </div>
                        <div className="flex items-center">
                            <CloudQueueIcon className="mr-2" /> Weather:
                        </div>
                        <div className="flex items-center">
                            <CloudIcon className="mr-2" /> Clouds :
                        </div>
                        <div className="flex items-center">
                            <AirIcon className="mr-2" /> Wind Speed :
                        </div>
                        <div className="flex items-center">
                            <ThunderstormIcon className="mr-2" /> Rain :
                        </div>
                    </div>
            </div>
                    {/* Day 2 Forecast Card */}
        <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Day 2 Forecast</h2>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                          <DateRangeIcon className="mr-2" /> Date :
                      </div>
                      <div className="flex items-center">
                          <ThermostatIcon className="mr-2" /> Temperature :
                      </div>
                      <div className="flex items-center">
                          <EmojiEmotionsIcon className="mr-2" /> Feels Like :
                      </div>
                      <div className="flex items-center">
                          <WaterDropIcon className="mr-2" /> Humidity :
                      </div>
                      <div className="flex items-center">
                          <CloudQueueIcon className="mr-2" /> Weather :
                      </div>
                      <div className="flex items-center">
                          <CloudIcon className="mr-2" /> Clouds :
                      </div>
                      <div className="flex items-center">
                          <AirIcon className="mr-2" /> Wind Speed :
                      </div>
                      <div className="flex items-center">
                          <ThunderstormIcon className="mr-2" /> Rain :
                      </div>
                  </div>
          </div>

        {/* Day 3 Forecast Card */}
          <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Day 3 Forecast</h2>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                          <DateRangeIcon className="mr-2" /> Date :
                      </div>
                      <div className="flex items-center">
                          <ThermostatIcon className="mr-2" /> Temperature :
                      </div>
                      <div className="flex items-center">
                          <EmojiEmotionsIcon className="mr-2" /> Feels Like :
                      </div>
                      <div className="flex items-center">
                          <WaterDropIcon className="mr-2" /> Humidity :
                      </div>
                      <div className="flex items-center">
                          <CloudQueueIcon className="mr-2" /> Weather :
                      </div>
                      <div className="flex items-center">
                          <CloudIcon className="mr-2" /> Clouds :
                      </div>
                      <div className="flex items-center">
                          <AirIcon className="mr-2" /> Wind Speed :
                      </div>
                      <div className="flex items-center">
                          <ThunderstormIcon className="mr-2" /> Rain :
                      </div>
                  </div>
          </div>
      </div>
    </>
  )
}

export default Weather