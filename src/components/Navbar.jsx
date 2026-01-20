import React from 'react'
import'./nav.scss'
import DateTime from './DateTime'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="" alt="" />
            </div>
            <div className="nav-item">
                <p>crazy xyz123</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="" alt="" />
            </div> 
            <div className="nav-item">
                <DateTime />
            </div>
        </div>
    </nav>
  )
}

export default Navbar