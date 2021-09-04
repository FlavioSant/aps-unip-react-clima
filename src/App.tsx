import Home from './pages/Home';

import { Container } from './components/Container';

import { GlobalStyles } from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Container>
      <Home />
    </Container>
  </>
);

export default App;
