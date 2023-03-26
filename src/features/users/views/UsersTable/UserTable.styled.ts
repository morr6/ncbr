import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
