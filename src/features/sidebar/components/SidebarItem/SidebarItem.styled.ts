import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ theme }) => theme.gutters[64]};
  padding: ${({ theme }) => theme.gutters[16]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.default};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grays[2]};
`;

export const IconWrapper = styled.div`
  margin-right: ${({ theme }) => theme.gutters[16]};
  display: flex;
  align-items: center;
`;
