import React from 'react'
import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Badge from '@mui/material/Badge'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className="search">
            <input type="text" placeholder='Search' />
            <SearchRoundedIcon/>
        </div>
        <div className="items">
            <div className="item">
                <LanguageRoundedIcon/>
                English
            </div>
            <div className="item">
            <Badge badgeContent={4} color="success">
              <NotificationsOutlinedIcon color="action" />
               </Badge>
              Notification
            </div>
            <div className="item">
            <Badge badgeContent={4} color="secondary">
              <LightbulbTwoToneIcon color="action" />
               </Badge>
                Profile
            </div>
            <div className="item">
                <img src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg" alt="" className='avatar' />
                <span>Elon Musk<br/>Project Manager</span> 
             
            </div>

        </div>

        </div>
       
        </div>
  )
}

export default Navbar