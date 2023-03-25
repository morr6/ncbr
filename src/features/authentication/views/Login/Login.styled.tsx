import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  width: 15rem;
  margin-bottom: ${({ theme }) => theme.gutters[32]} !important;
`;

export const StyledInputButton = styled(IconButton)`
  background: transparent !important;
`;
