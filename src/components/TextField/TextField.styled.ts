import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutters[32]} !important;
`;
