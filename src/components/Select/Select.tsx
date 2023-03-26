import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectComponent, { SelectChangeEvent } from '@mui/material/Select';

type Value = string | number | readonly string[] | undefined;

type SelectProps = {
  value: string;
  options: {
    value: Value;
    text: string;
  }[];
  label: string;
  errorMessage?: string | false | undefined;
  onChange: (value: Value) => void;
};

const Select = ({ value, options, label, errorMessage, onChange }: SelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
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
