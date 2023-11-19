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
import styled from 'styled-components';

function Header({isNightMode, setNightMode}) {

  return (
    <HeaderSection >
        <div>
            <RiMenu4Line />
        </div>
        <div>
            <span>Just Do!</span>
        </div>
    </HeaderSection>
  )
}

export default Header;



// styled componet for the header componet

const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    background-color: #fff;
    padding: 1rem;

    .icons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

`