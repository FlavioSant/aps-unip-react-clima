import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';

import logoImg from '../../assets/logo.svg';
import buildingImg from '../../assets/building.svg';

import { Weather } from '../../types/weather';
import { Input } from '../../components/Input';

import { Button, Container, Form, NoCity } from './styles';
import { WeatherInfo } from '../../components/WeatherInfo';

const Home: React.FC = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState<Weather | null>(null);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');

      try {
        const { data } = await axios.get(
          `https://goweather.herokuapp.com/weather/${city}`,
        );
        setWeather({ ...data, city: city });
      } catch (err) {
        setError('Cidade não encontrada, digite uma cidade válida.');
        console.error(err);
      }
    },
    [city],
  );

  return (
    <Container>
      <img src={logoImg} alt="Clima/Tempo" width={350} height={80} />
      <Form onSubmit={handleSubmit}>
        <h2>Veja o clima/tempo de sua cidade</h2>

        <Input
          name="cidade"
          label="Cidade"
          placeholder="Procurar por uma cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
          errorMessage={error}
        />
        <Button type="submit">Buscar</Button>
      </Form>

      {weather ? (
        <WeatherInfo weather={weather} />
      ) : (
        <NoCity>
          <h3>Pesquise por uma cidade...</h3>
          <img src={buildingImg} alt="Cidade" width={350} height={350} />
        </NoCity>
      )}
    </Container>
  );
};

export default Home;
