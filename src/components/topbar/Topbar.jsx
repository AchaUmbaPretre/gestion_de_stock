import { Language, MailOutline, NotificationsNone, Settings, WbSunnyOutlined } from '@mui/icons-material'
import React from 'react'
import './topbar.css'
import logo from './../../assets/logo_doe-removebg-preview.png'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <img src={logo} alt="" className="topbar-img" />
          <span className="logo">Ndoé Boutique</span>  
        </div>
        <div className="topbar-right">
          <div className="topbar-icons">
            <NotificationsNone/>
            <span className="topbar-not">2</span>
          </div>
          <div className="topbar-icons">
            <MailOutline/>
            <span className="topbar-not">2</span>
          </div>
          <div className="topbar-icons">
            <img src={logo} alt="" className="topbar-imgUser"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar