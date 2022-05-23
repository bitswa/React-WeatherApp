import { useContext } from 'react';
import { ContextApi } from '../contexts/ContextApi';
import RenderIf from '../utilities/RenderIf';

export default function WeatherContent() {

  const { list } = useContext(ContextApi);

  return (
    <RenderIf isTrue={list.current}>
      <section className='c-content'>
        <div className='c-location'>
          <h1 className='c-location__name'>
            {list.current && list.location.name}
          </h1>
          <h2 className='c-location__temperature'>
            {list.current && list.current.temp_c}°C
          </h2>
        </div>
        <div className='c-current'>
          <div>
            <img src={list.current && list.current.condition.icon} alt=''/>
            <p>{list.current && list.current.condition.text}</p>
          </div>
          <p className='c-current__rain'>
              Humidity: {list.current && list.current.humidity}%
          </p>
          <p className='c-current__wind'>
            Wind: {list.current && list.current.wind_kph}km/h
          </p>
        </div>
      </section>
    </RenderIf>
  )
}