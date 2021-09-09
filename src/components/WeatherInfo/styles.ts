import styled from 'styled-components';

export const WeatherContainer = styled.section`
  max-width: 500px;
  width: 100%;

  h1 {
    color: var(--gray-800);
    font-size: 4rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h3 {
      text-transform: capitalize;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }

  article {
    margin-top: 2rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }
`;

export const ForecastContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--blue);
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    color: var(--gray-50);
    padding: 1rem 0.5rem;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;
