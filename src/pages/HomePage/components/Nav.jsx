import React from 'react'
import logo from '../images/logo.png'

function Nav() {
  return (
    <nav>
      <div className="imgContainer">
        <img src={logo} alt="" />
      </div>
      <div className="navLink">
        <button>關卡任務</button>
        <button>競賽說明</button>
        <button>立即報名</button>
      </div>
    </nav>
  )
}

export default Nav
