import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 15rem;
  margin: 0 auto;
  text-align: center;
`;

export const StyledInputButton = styled(IconButton)`
  background: transparent !important;
`;
