import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  width: 100%;

  h2 {
    color: var(--gray-800);
    margin: 3rem 0 2rem 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: transparent;
  border: 2px solid var(--blue);
  border-radius: 8px;
  color: var(--blue);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--blue);
    color: var(--gray-50);
  }
`;
