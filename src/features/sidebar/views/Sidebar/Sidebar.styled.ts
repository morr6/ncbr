import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 12.5%;
  overflow: hidden;
  box-shadow: 0 0 20px -10px ${({ theme }) => theme.colors.grays[5]};
  border-radius: 4px;
  padding: ${({ theme }) => theme.gutters[16]};
  padding-top: ${({ theme }) => theme.gutters[64]};
`;

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
