import './navbar.scss'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className='icon' />
                    English
                </div>
                <div className="item">
                    <DarkModeIcon className='icon' />
                </div>
                <div className="item">
                    <FullscreenExitIcon className='icon' />
                </div>
                <div className="item">
                    <NotificationsIcon className='icon' />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleIcon className='icon' />
                    <div className="counter">3</div>
                </div>
                <div className="item">
                    <ListAltIcon className='icon' />
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar