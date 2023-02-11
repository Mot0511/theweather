import React, {useEffect, useMemo, useState} from 'react';
import cl from './App.module.css'
import Citys from "./components/citys/citys";
import axios from "axios";
import {useCookies} from "react-cookie";
import Main from "./components/main";
import Loading from "./components/loading/loading";

const App = () => {
    const [temp, setTemp] = useState('')
    const [daynighttemp, setdaynighttemp] = useState('')
    const [otherdata, setOtherdata] = useState([])

    const [city, setCity] = useState('Киров')
    const [loading, setLoading] = useState(true)


    const getCity = (city) => {
        setLoading(true)
        axios({
            url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f8cd8913df12e5e1dc9d33d09ae8fc0c&lang=RU&units=metric',
            method: 'get',
        })
            .then((res) => {
                setCity(city)
                const data = res.data
                console.log(data);
                setTemp(Math.round(data.main.temp))
                setdaynighttemp(Math.round(data.main.temp_max) + ' / ' + Math.round(data.main.temp_min))
                setOtherdata([data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1), data.wind.speed + ' м/с', data.main.humidity + '%', Math.round(data.main.pressure / 133.322 * 100) + ' мм рт. ст.'])
                setLoading(false)
            })
    }
    useMemo(() => {
        getCity(city)
    }, [])

    return (
        <div>
          <h1 className={cl.heading}>Погода в городе {city}</h1>
            <Main temp={temp} daynighttemp={daynighttemp} otherdata={otherdata}/>
            {/*{*/}
            {/*    loading*/}
            {/*        ? <Loading />*/}
            {/*        :*/}
            {/*}*/}

            <Citys getCity={getCity} />
        </div>
    );
};

export default App;