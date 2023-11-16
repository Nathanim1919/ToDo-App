import React, {useState} from 'react'
import {
    RiMenu4Line
} from "react-icons/ri";
import {
    CiSearch
} from "react-icons/ci";
import {
    IoIosNotificationsOutline,
    IoMdSunny,
} from "react-icons/io";

import {
    MdModeNight
} from "react-icons/md";

function Header() {
  const [isNightMode, setNightMode] = useState(false); 
  return (
    <div>
        <div>
            <RiMenu4Line />
        </div>

        <div>
            <div>
            <CiSearch />
            </div>
            <div>
            <IoIosNotificationsOutline />
            </div>
            <div>
                {isNightMode?<MdModeNight/>:<IoMdSunny/>}
            </div>
        </div>
    </div>
  )
}

export default Header