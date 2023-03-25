import { ReactNode } from 'react';

import { Wrapper } from './FullScreenWrapper.styled';

type FullScreenWrapperProps = {
  children: ReactNode;
};

export const FullScreenWrapper = ({ children }: FullScreenWrapperProps) => (
  <Wrapper>{children}</Wrapper>
);

export default FullScreenWrapper;
