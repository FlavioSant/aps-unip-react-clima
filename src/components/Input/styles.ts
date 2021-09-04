import styled from 'styled-components';

export const InputContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  label {
    color: var(--gray-800);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  input {
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    color: var(--gray-800);
    font-size: 1rem;
    font-weight: 500;
    outline: 0;
    height: 45px;
    padding: 0.5rem;
    width: 100%;

    &:focus {
      border-color: var(--blue);
    }

    &::placeholder {
      color: var(--gray-300);
    }
  }
`;
