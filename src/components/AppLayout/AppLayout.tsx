import { ReactNode } from 'react';

import Sidebar from 'features/sidebar/views/Sidebar/Sidebar';
import { LayoutWrapper, ContentWrapper } from './AppLayout.styled';

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <LayoutWrapper>
      <Sidebar />

      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default AppLayout;
