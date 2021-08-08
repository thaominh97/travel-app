import React, { memo } from 'react'
import Navigation from './Top_Nav'
import DecoreImg from '../Container/DecoreImg/decoreImg'
//import Navbar from './Navbar/Navbar'


function Header() {
    return (
        <div>
            <DecoreImg/>
            {/* <Navbar/> */}
            <Navigation/>            
        </div>
    )
}

export default memo(Header)
