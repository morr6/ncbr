import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectComponent, { SelectChangeEvent } from '@mui/material/Select';

type Value = string | number | readonly string[] | undefined;

type SelectProps = {
  options: {
    value: Value;
    text: string;
  }[];
  label: string;
  errorMessage?: string | false | undefined;
  onChange: (value: Value) => void;
};

const Select = ({ options, label, errorMessage, onChange }: SelectProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setValue(value);
    onChange(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={!!errorMessage}>
        <InputLabel id="select-label">{label}</InputLabel>

        <SelectComponent id="select" value={value} label={label} onChange={handleChange}>
          {options.map(({ value, text }) => (
            <MenuItem key={text} value={value}>
              {text}
            </MenuItem>
          ))}
        </SelectComponent>

        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default Select;
