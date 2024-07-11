import React, { useEffect, useState } from 'react'
import Date_time from '../public/components/Date_time';

function App() {
  const [city, setCity] = useState("delhi")
  const [weatherData, setWeatherData] = useState([]);

  const fetchApi = async () => {
    let apiKey = `enter your key`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
    try {
      const response = await fetch(apiUrl + `&appid=${apiKey}&units=metric`)
      const data = await response.json()
      setWeatherData([data])
    } catch (error) {
      return <h1>{error}
      </h1>
    }
  }



  useEffect(() => {
    fetchApi()
  }, [])


  const handleSearch = () => {
    fetchApi()
  }



  return (
    <>
      {
        weatherData && <div className='flex justify-center min-h-screen items-center bg-blue-400'>
          <div className='flex justify-center items-center h-1/2 flex-col border-1 w-[280px] gap-3 shadow-xl shadow-slate-600 bg-white rounded-lg'>
            <h1 className='mt-2 text-3xl  font-bold text-blue-400 '>Weather App</h1>
            <div className='mt-2 px-0.5 flex flex-row gap-2 '>
              <input type="text" placeholder='enter city here' className='px-2 text-lg outline-none bottom-2 border-red-500
          rounded-xl bg-slate-200'
                value={city}
                onChange={(e) => setCity(e.target.value)} />
              <button className='text-2xl' onClick={handleSearch}><i className="ri-search-line"></i></button>
            </div>

            {
              weatherData && weatherData.length ?

                weatherData.map((data, index) => (
                  <div key={index}>
                    <div className='mt-2 text-center'>
                      <h2 className='text-2xl font-bold'>{data ? data.name.toUpperCase() : "Delhi"}</h2>
                      <Date_time />
                      <img className='h-44 w-[100%] bg-center bg-cover' src="\src\assets\rain_sun.png" alt="img" />
                    </div>
                    <div className='text-center mt-2'>
                      <h1 className='text-3xl font-semibold'>{weatherData && weatherData.length ? Math.floor(data.main.temp) : "35"}°C</h1>
                      <p className='text-sm text-slate-500'>{data.weather[0].main}</p>
                      <p className='text-xs text-slate-500'>{data.name.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-row gap-7 text-center mt-2'>
                      <div className=''>
                        <p className='iFont'><i className="ri-water-percent-line"></i></p>
                        <p className='temp '>HUMIDITY</p>
                        <p className='values '>{data.main.humidity}%</p>
                      </div>

                      <div>
                        <p className='iFont'><i className="ri-windy-fill"></i></p>
                        <p className='temp'>WIND</p>
                        <p className='values'>{data.wind.speed}m/s</p>
                      </div>
                      <div>
                        <p className='iFont font-normal'><i className="ri-temp-hot-line"></i></p>
                        <p className='temp'>TEMPRATURE</p>
                        <p className='values mb-5'>{Math.floor(data.main.temp)}°C</p>
                      </div>
                    </div>
                  </div>
                )) :
                null
            }
          </div>
        </div>
      }


    </>
  )
}

export default App
