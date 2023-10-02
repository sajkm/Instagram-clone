import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';


function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='s-logo' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
        <div className='sidenav-button'>
          <button className='sidenav-btn'>
            <HomeIcon />
            <span>Home</span>
          </button>

          <button className='sidenav-btn'>
            <SearchIcon />
            <span>Search</span>
          </button>

          <button className='sidenav-btn'>
            <ExploreIcon />
            <span>Explore</span>
          </button>

          <button className='sidenav-btn'>
            <SlideshowIcon />
            <span>Reels</span>
          </button>

          <button className='sidenav-btn'>
            <ChatIcon />
            <span>Messages</span>
          </button>

          <button className='sidenav-btn'>
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>

          <button className='sidenav-btn'>
            <AddCircleOutlineIcon />
            <span>Create</span>
          </button>
        </div>
        <div className="sidenav-more">
          <button className='sidenav-btn'>
            <MenuIcon/>
            <span>Menu</span>
          </button>
        </div>
    </div>
  )
}

export default Sidenav