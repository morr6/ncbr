import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  padding: 16.5px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.gutters[16]};
`;
