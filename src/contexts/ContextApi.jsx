import { createContext, useState } from "react";
export const ContextApi = createContext();

export function ContextApiProvider({children}) {

  const [location, setLocation] = useState('Florida');
  const [list, setList] = useState({});

  const url = `https://api.weatherapi.com/v1/current.json?key=e15301164db64de7884174936222105&q=${location}&aqi=no`;

  const handleSearch = () => {
    if (location) {
      fetch(url)
        .then(promise => promise.json())
        .then(json => {
          setLocation('')
          setList(json)
          console.log(json)
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