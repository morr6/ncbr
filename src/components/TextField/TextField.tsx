import { ChangeEvent } from 'react';
import { InputAdornment } from '@mui/material';

import { StyledTextField } from './TextField.styled';

type TextFieldProps = {
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  errorMessage?: string | false | undefined;
  icon?: JSX.Element;
  variant?: 'outlined' | 'filled' | 'standard' | undefined;
  endAdornment?: JSX.Element;
};

export const TextField = ({
  name,
  type = 'test',
  placeholder,
  onChange,
  onBlur,
  value,
  errorMessage,
  icon,
  variant = 'standard',
  endAdornment,
}: TextFieldProps) => {
  return (
    <StyledTextField
      name={name}
      type={type}
      placeholder={placeholder}
      variant={variant}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage}
      InputProps={{
        startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>,
        endAdornment,
      }}
    />
  );
};

export default TextField;
