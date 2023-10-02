import React from 'react'
import "./Home.css"
import Sidenav from './Navigation/Sidenav'
import Timeline from './Timeline/Timeline'

function Home() {
  return (
    <div className='homepage'>
        <div className="home-nav">
            <Sidenav />
        </div>
        <div className="home-timeline">
            <Timeline />
        </div>
    </div>
  )
}

export default Home