import React, {useState} from 'react';
import cl from './citys.module.css'

const Citys = ({getCity}) => {
    const [city, setCity] = useState('')

    return (
        <div className={cl.citys}>
            <input className={cl.search} value={city} type={'search'} placeholder={'Поиск города'} onChange={e => setCity(e.target.value)} />
            <button className={cl.searchBt} onClick={() => getCity(city)}>Найти</button>
            <hr/>
            <button className={cl.city} onClick={() => getCity('Киров')}>Киров</button>
            <button className={cl.city} onClick={() => getCity('Москва')}>Москва</button>
            <button className={cl.city} onClick={() => getCity('Санкт-Петербург')}>Санк-Питербург</button>
        </div>
    );
};

export default Citys;