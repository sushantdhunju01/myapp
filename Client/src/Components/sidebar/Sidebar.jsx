import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
        <div className="top">
            <span className="logo">Hyper Way</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to='/' style={{ textDecoration: 'none'}}>
                <li className='list'><DashboardIcon className='icon'/><span>Dashboard</span></li>
                </Link>
                <p className="title">SERVICE</p>
                <Link to='/products' style={{ textDecoration: 'none'}}>
                <li className='list'><PrecisionManufacturingIcon className='icon'/><span>Sales By Products</span></li>
                </Link> 
                <Link to='/sales' style={{ textDecoration: 'none'}}>
                <li className='list'><PointOfSaleIcon className='icon'/><span>Sales By Brand</span></li>
                </Link>
           
                <p className="title">SYSTEM</p>
                <li className='list'><PollRoundedIcon className='icon'/><span>Stats</span></li>
                <li className='list'><HealthAndSafetyRoundedIcon className='icon'/><span>System health</span></li>
                <li className='list'><NotificationsNoneRoundedIcon className='icon'/><span>Notificaton</span></li>
                <p className="title">USER</p>
                <li className='list'><PersonIcon className='icon'/><span>Profile</span></li>
                <li className='list'><SettingsIcon className='icon'/><span>Setting</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar