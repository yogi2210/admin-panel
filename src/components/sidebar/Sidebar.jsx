import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import {Link} from 'react-router-dom'

import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar' >
        <div className="top">
            <Link to='/' style={{textDecoration :"none"}} >
            <span className='logo' >Dashboard</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>

                <p className="title">LIST</p>
                <Link to='/users' style={{textDecoration :"none"}} >
                <li>
                    <PersonIcon className="icon" />
                    <span>Users</span>
                </li>
                </Link>
                <Link to='/products' style={{textDecoration :"none"}} >
                <li>
                    <WorkIcon className="icon" />
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <ShoppingCartIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL LINKS</p>
                <li>
                    <QueryStatsIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className="icon" />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <FolderIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
               
            </ul>
        </div>
        <div className="bottom">
            <div onClick={()=> dispatch({type:"LIGHT"})} className="colorOption"></div>
            <div onClick={()=> dispatch({type:"DARK"})} className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar