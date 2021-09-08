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
      <img src={cityIcon} alt="Cidade" width={28} height={28} />
      <h3>{weather.city}</h3>
    </div>

    <div>
      <img src={windIcon} alt="Vento" width={28} height={28} />
      <h3>{weather.wind}</h3>
    </div>

    <article>
      <h2>Previsão para os próximos 3 dias:</h2>
      <ForecastContainer>
        {weather.forecast.map((item, index) => (
          <div key={index}>
            <p>{item.temperature}</p>
            <p>
              <img src={windIconWhite} alt="Vento" width={20} height={20} />
              {item.wind}
            </p>
          </div>
        ))}
      </ForecastContainer>
    </article>
  </WeatherContainer>
);
