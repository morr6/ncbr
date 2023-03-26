import { useNavigate } from 'react-router-dom';

import { SidebarItem } from 'features/sidebar/components';
import { LogoutWrapper, SidebarWrapper } from './Sidebar.styled';
import sidebarItems from 'features/sidebar/utils/sidebarItems';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

export const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <SidebarWrapper>
      <div>
        {sidebarItems.map(({ name, icon, path }) => (
          <SidebarItem key={name} name={name} icon={icon} path={path} />
        ))}
      </div>

      <LogoutWrapper>
        <Button variant="contained" endIcon={<LogoutIcon />} onClick={logout}>
          Logout
        </Button>
      </LogoutWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
