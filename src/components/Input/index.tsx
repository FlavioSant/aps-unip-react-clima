import { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  errorMessage,
  ...rest
}) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" {...rest} />
      {errorMessage && <span>{errorMessage}</span>}
    </InputContainer>
  );
};
