import { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" {...rest} />
    </InputContainer>
  );
};
