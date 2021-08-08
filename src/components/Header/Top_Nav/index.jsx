import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../store/redux/modalReducer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './top_nav.css'
import Logo from '../../../assets/img/Logo.png'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';


library.add(fas, faAngleDown);

function Navigation() {
    const dispatch = useDispatch();
    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
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
            icon: <FaIcons.FaPlane />,
            cName: 'nav-text'
        },
        {
            title: 'Bookings',
            path: '/bookings',
            icon: <FaIcons.FaCalendarCheck />,
            cName: 'nav-text'
        },
        {
            title: 'Login',
            path: '/login',
            icon: <FaIcons.FaSignInAlt />,
            cName: 'nav-text',
            onClick: () => {
                dispatch(openModal())
            }
        }
    ];

    return (

        <div className="topnav" id="TopNav">

            <Link to="/" className="logo"><img src={Logo} alt="Logo" /></Link>

            <ul className="nav-list">
                {SidebarData.map((item, index) =>
                (<li key={index} className="nav-item font-ggsans-regular"
                    onClick={() => item?.onClick ? item.onClick() : " "} >
                    <Link to={item.path}>{item.title}</Link>
                </li>)
                ).slice(1)}

                <button className="nav-item__button font-ggsans-regular" >Sign up</button>
                <button className="nav-item__button-icon font-ggsans-regular">
                    EN
                    <FontAwesomeIcon icon="angle-down"
                        style={{ marginLeft: "2px" }}
                    />
                </button>
            </ul>
            <div href="#menu-burger" className="menu-burger" >
                <IconContext.Provider value={{ color: '#212832' }}>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} 
                                    className={item.cName}
                                    onClick={() => item?.onClick ? item.onClick() : " "}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>

            </div>
        </div>
    )
}

export default memo(Navigation)
