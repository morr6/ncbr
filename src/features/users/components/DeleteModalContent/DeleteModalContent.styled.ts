import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const StyledButton = styled(Button)<{ variant: string }>`
  margin-left: ${({ theme }) => theme.gutters[16]}!important;
`;
