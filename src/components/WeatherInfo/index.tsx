import windIcon from '../../assets/wind-icon.svg';
import windIconWhite from '../../assets/wind-icon-white.svg';
import cityIcon from '../../assets/city-building.svg';

import { Weather } from '../../types/weather';

import { ForecastContainer, WeatherContainer } from './styles';

interface WeatherProps {
  weather: Weather;
}

export const WeatherInfo: React.FC<WeatherProps> = ({ weather }) => (
  <WeatherContainer>
    <h1>{weather.temperature}</h1>

    <div>
      <img src={cityIcon} alt="Cidade" />
      <h3>{weather.city}</h3>
    </div>

    <div>
      <img src={windIcon} alt="Vento" />
      <h3>{weather.wind}</h3>
    </div>

    <article>
      <h2>Previsão para os próximos 3 dias:</h2>
      <ForecastContainer>
        {weather.forecast.map((item, index) => (
          <div key={index}>
            <h3>{item.temperature}</h3>
            <span>
              <img src={windIconWhite} alt="Vento" />
              {item.wind}
            </span>
          </div>
        ))}
      </ForecastContainer>
    </article>
  </WeatherContainer>
);
