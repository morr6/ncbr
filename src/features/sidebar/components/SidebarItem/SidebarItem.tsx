import React from 'react';

import { SidebarItemType } from 'features/sidebar/types';

import { IconWrapper, SidebarItemLink } from './SidebarItem.styled';

export const SidebarItem = ({ name, path, icon }: SidebarItemType) => {
  return (
    <SidebarItemLink to={path}>
      <IconWrapper>{icon}</IconWrapper>
      {name}
    </SidebarItemLink>
  );
};

export default SidebarItem;
