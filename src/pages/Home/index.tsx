import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Button, Container, Form } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Clima/Tempo" />
      <Form>
        <h2>Veja o clima/tempo de sua cidade</h2>

        <Input name="cidade" label="Cidade" placeholder="Procurar por cidade" />
        <Button type="submit">Buscar</Button>
      </Form>
    </Container>
  );
};

export default Home;
