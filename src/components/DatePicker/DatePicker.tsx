import { StyledDatePicker } from './DatePicker.styled';

type DatepickerProps = {
  value: Date;
  name: string;
  onChange: (field: string, date: Date) => void;
};

export const Datepicker = ({ value, name, onChange }: DatepickerProps) => {
  return (
    <StyledDatePicker
      selected={value}
      dateFormat="yyyy-MM-dd"
      className="form-control"
      name={name}
      onChange={(date: Date) => onChange(name, date)}
    />
  );
};

export default Datepicker;
