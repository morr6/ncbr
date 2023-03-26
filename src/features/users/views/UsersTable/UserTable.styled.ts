import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

export const Wrapper = styled.div`
  box-shadow: 0 0 20px -10px ${({ theme }) => theme.colors.grays[5]};
  border-radius: 4px;
  padding: ${({ theme }) => theme.gutters[32]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.gutters[32]};
`;

export const Table = styled.table`
  border-top: 1px solid ${({ theme }) => theme.border.color};
  border-bottom: 1px solid ${({ theme }) => theme.border.color};
`;

export const Tr = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.grays[1]};
  }

  &:hover {
    td {
      cursor: pointer;
      border-top: 1px solid ${({ theme }) => theme.colors.azure};
      border-bottom: 1px solid ${({ theme }) => theme.colors.azure};
      &:first-child {
        border-left: 1px solid ${({ theme }) => theme.colors.azure};
      }
      &:last-child {
        border-right: 1px solid ${({ theme }) => theme.colors.azure};
      }
    }
    border: 1px solid ${({ theme }) => theme.colors.azure};
  }
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.gutters[16]} ${({ theme }) => theme.gutters[32]};
`;

export const Td = styled.td`
  text-align: center;
  padding: ${({ theme }) => theme.gutters[16]} ${({ theme }) => theme.gutters[32]};
  border: 1px solid ${({ theme }) => theme.border.color};
  border-left: none;
  border-bottom: none;

  &:last-child {
    border-right: none;
  }
`;

export const AddUserButton = styled(MuiButton)`
  margin: ${({ theme }) => theme.gutters[32]} 0 0 auto !important;
`;
