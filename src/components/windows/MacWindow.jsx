import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children }) => {
  return (
    <div>
        <Rnd default={{
            width:"40vw",
            height:"40vw",
            x:300,
            y:200
        }}>
            {/* <img src="" height={300} width={300} alt="" /> */}
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                    </div>

                    <div className="title">
                        <p>swaraj patil -zsh</p>
                    </div>
                </div>
            <div className="main-content">
                 {children}
            </div>
            </div>
        </Rnd>
    </div>
  )
}

export default MacWindow