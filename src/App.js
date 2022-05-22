import { ContextApiProvider } from './contexts/ContextApi';
import WeatherSearch from './components/WeatherSearch';
import WeatherContent from './components/WeatherContent';


import './scss/style.scss';

function App() {
  return (
    <ContextApiProvider>
      <div className='c-card'>
        <header className='l-header'>
          <WeatherSearch />
        </header>
        <main className='l-main'>
          <WeatherContent />
        </main>
      </div>
    </ContextApiProvider>
  );
}
export default App;