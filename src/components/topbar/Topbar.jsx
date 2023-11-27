import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { AuthContext } from '../../context/authContext';
import './topbar.scss';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Topbar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleMenu = async () => {
    try {

      navigate('/');

    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Menu className='topbar-img-title' />
        </div>
        <div className="topbar-right">
          <MailOutlineIcon className='topbar-icon' />
          <NotificationsNoneIcon className='topbar-icon' />
          <img src={''} alt="" className="topbar-img" />
          <div className="topbar-row" onClick={handleMenu}>
            <PowerSettingsNewIcon className='topbar-power' />
            <span className="span-logout">Déconnecter</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;