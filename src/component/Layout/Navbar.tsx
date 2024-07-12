import React from 'react'
import { ReactComponent as Logo } from '../../assets/icon/x Video.svg'
import { ReactComponent as MessageIcon } from '../../assets/icon/MessageIcon.svg'
import { ReactComponent as SearchIcon } from '../../assets/icon/SearchIcon.svg'
import { ReactComponent as NotificationIcon } from '../../assets/icon/NotificationIcon.svg'
import UserImg from '../../assets/avtar/Ellipse 7 (1).png'
import { GoHome } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { PiFilmStripLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";

export default function Navbar(props: any) {

  return (
    <>
      <div className='navbarCom'>
        <div className='flex '>
          <button onClick={()=>props.setSidebarOpen(!props.sidebarOpen)}>
            <TiThMenu />
          </button>
            <div className='logoNav'>
              <Logo />
            </div>
            <div className='rightNav'>
              <button onClick={props.hadnleThemeChange}><MessageIcon /></button>
              <button><NotificationIcon /></button>
              <button><SearchIcon /></button>
              <div className='userImg'>
                <img src={UserImg} />
              </div>
            </div>
        </div>
      </div>
      <div className="fixed-nav">
        <ul className='nav-list'>
          <li><a href="#" className='active'><GoHome className='nav-icon' /></a></li>
          <li><a href="#"><SiYoutubeshorts className='nav-icon' /> </a></li>
          <li><a href="#"><PiFilmStripLight className='nav-icon' /></a></li>
          <li><a href="#"><CgMediaLive className='nav-icon' /></a></li>
          <li><a href="#"><FaRegUser className='nav-icon' /></a></li>
        </ul>
      </div>
    </>
  )
}
