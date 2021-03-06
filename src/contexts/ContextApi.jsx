import { createContext, useState } from "react";
export const ContextApi = createContext();

export function ContextApiProvider({children}) {

  const [location, setLocation] = useState('');
  const [list, setList] = useState({});

  const url = `https://api.weatherapi.com/v1/forecast.json?key=e15301164db64de7884174936222105&q=${location}&days=1&aqi=no&alerts=no`;

  const handleSearch = () => {
    if (location) {
      fetch(url)
        .then(promise => promise.json())
        .then(json => {
          setLocation('');
          setList(json);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <ContextApi.Provider value={{location, setLocation, handleSearch, list}}>
      {children}
    </ContextApi.Provider>
  )
}