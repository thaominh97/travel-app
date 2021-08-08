import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Destination',
        path: '/destination',
        icon: <FaIcons.FaMapMarkedAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Hotels',
        path: '/hotels',
        icon: <FaIcons.FaHotel />,
        cName: 'nav-text'
    },
    {
        title: 'Flights',
        path: '/flights',
        icon: <FaIcons.FaPlane/>,
        cName: 'nav-text'
    },
    {
        title: 'Bookings',
        path: '/bookings',
        icon: <FaIcons.FaCalendarCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaSignInAlt />,
        cName: 'nav-text'
    }
];