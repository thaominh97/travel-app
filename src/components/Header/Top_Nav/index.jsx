import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './top_nav.css'
import Logo from '../../../assets/img/Logo.png'
//import styled from 'styled-components'


library.add(fas, faAngleDown);

function Navigation() {
    const navList = [
        { id: 1, title: 'Destination', href: "#Destination" },
        { id: 2, title: 'Hotels', href: "#Hotels" },
        { id: 3, title: 'Flights', href: "#Flights" },
        { id: 4, title: 'Bookings', href: "#Bookings" },
        { id: 5, title: 'Login', href: "#Login" },
    ]

    

    return (

        <div className="topnav" id="TopNav">

            <img src={Logo} className="logo" alt="Logo"></img>

            <ul className="nav-list">
                {navList.map((item) =>
                (<li key={item.id} className="nav-item font-ggsans-regular"
                >
                    <a href={item.href}>{item.title}</a>
                </li>)
                )}

                <button className="nav-item__button font-ggsans-regular" >Sign up</button>
                <button className="nav-item__button-icon font-ggsans-regular">
                    EN
                    <FontAwesomeIcon icon="angle-down"
                        style={{ marginLeft: "2px" }}
                    />
                </button>
            </ul>
            <a href="#menu-burger" className="menu-burger" >
                    <i class="fa fa-bars"></i>
                </a>


        </div>
    )
}

export default memo(Navigation)
