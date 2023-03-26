import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  margin-top: ${({ theme }) => theme.gutters[32]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
