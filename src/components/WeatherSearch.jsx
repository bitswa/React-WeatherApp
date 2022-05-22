import { useContext } from 'react';
import { ContextApi } from '../contexts/ContextApi';

export default function WeatherSearch() {

  const {location, setLocation, handleSearch} = useContext(ContextApi);

  return (
    <nav>
      <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder='Search' />

      <button onClick={handleSearch}>
        <i className="fi fi-rr-search"></i>
      </button>
    </nav>
  )
}