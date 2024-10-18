import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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

const Weather = () => {

  const [search, setSearch] = useState()

  return (
    <>
      <div className='mt-6'>
          <button className='p-2 relative left-10'>
              <Link to='/'><ArrowBackIosNewIcon/></Link>
          </button>
      </div>
      <div className='flex items-center justify-center'>
          <div className='w-2/5 bg-blue-200 rounded-lg shadow-md p-2'>
                <div className='flex justify-between p-2'>
                    <h1 className='flex items-center'>
                        <AccessTimeIcon className='mr-2'/>Time zone :
                    </h1>
                    <h1>Form</h1>
                </div>
                <div className='flex justify-center p-6'>
                    <div className='grid grid-cols-2 gap-x-32 gap-y-10'>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 m-10">
          {/* Day 1 Forecast Card */}
          <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Day 1 Forecast</h2>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                          <DateRangeIcon className="mr-2" /> Date:
                      </div>
                      <div className="flex items-center">
                          <ThermostatIcon className="mr-2" /> Temperature:
                      </div>
                      <div className="flex items-center">
                          <EmojiEmotionsIcon className="mr-2" /> Feels Like:
                      </div>
                      <div className="flex items-center">
                          <WaterDropIcon className="mr-2" /> Humidity:
                      </div>
                      <div className="flex items-center">
                          <CloudQueueIcon className="mr-2" /> Weather:
                      </div>
                      <div className="flex items-center">
                          <CloudIcon className="mr-2" /> Clouds:
                      </div>
                      <div className="flex items-center">
                          <AirIcon className="mr-2" /> Wind Speed:
                      </div>
                      <div className="flex items-center">
                          <ThunderstormIcon className="mr-2" /> Rain:
                      </div>
                  </div>
          </div>

        {/* Day 2 Forecast Card */}
          <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Day 2 Forecast</h2>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                          <DateRangeIcon className="mr-2" /> Date:
                      </div>
                      <div className="flex items-center">
                          <ThermostatIcon className="mr-2" /> Temperature:
                      </div>
                      <div className="flex items-center">
                          <EmojiEmotionsIcon className="mr-2" /> Feels Like:
                      </div>
                      <div className="flex items-center">
                          <WaterDropIcon className="mr-2" /> Humidity:
                      </div>
                      <div className="flex items-center">
                          <CloudQueueIcon className="mr-2" /> Weather:
                      </div>
                      <div className="flex items-center">
                          <CloudIcon className="mr-2" /> Clouds:
                      </div>
                      <div className="flex items-center">
                          <AirIcon className="mr-2" /> Wind Speed:
                      </div>
                      <div className="flex items-center">
                          <ThunderstormIcon className="mr-2" /> Rain:
                      </div>
                  </div>
          </div>

        {/* Day 3 Forecast Card */}
          <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Day 3 Forecast</h2>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                          <DateRangeIcon className="mr-2" /> Date:
                      </div>
                      <div className="flex items-center">
                          <ThermostatIcon className="mr-2" /> Temperature:
                      </div>
                      <div className="flex items-center">
                          <EmojiEmotionsIcon className="mr-2" /> Feels Like:
                      </div>
                      <div className="flex items-center">
                          <WaterDropIcon className="mr-2" /> Humidity:
                      </div>
                      <div className="flex items-center">
                          <CloudQueueIcon className="mr-2" /> Weather:
                      </div>
                      <div className="flex items-center">
                          <CloudIcon className="mr-2" /> Clouds:
                      </div>
                      <div className="flex items-center">
                          <AirIcon className="mr-2" /> Wind Speed:
                      </div>
                      <div className="flex items-center">
                          <ThunderstormIcon className="mr-2" /> Rain:
                      </div>
                  </div>
          </div>
      </div>
    </>
  )
}

export default Weather