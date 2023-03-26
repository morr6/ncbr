import styled from 'styled-components';

export const Form = styled.form`
  width: 25rem;
  box-shadow: 0 0 20px -10px ${({ theme }) => theme.colors.grays[5]};
  border-radius: 4px;
  padding: ${({ theme }) => theme.gutters[64]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;
