import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { SidebarItemType } from '../types';

const sidebarItems: SidebarItemType[] = [
  {
    name: 'Users table',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Add new user',
    path: '/user/0',
    icon: <PersonAddAltIcon />,
  },
];

export default sidebarItems;
