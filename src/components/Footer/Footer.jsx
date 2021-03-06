import React from 'react'
import './Footer.css'
import '../../assets/fontawesome-free/js/all'
import Apple from '../../assets/img/apple.png'
import GooglePlay from '../../assets/img/google-play.png'


function Footer() {

    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-items main-item">
                    <h5>Jadoo.</h5>
                    <p style={{ fontSize: "13px" }}>Book your trip in minute, get full<br />
                        Control for much longer.
                    </p>
                </div>
                <div className="footer-items">
                    <p className="p-style1">Company</p>
                    <ul className="list-items p-style">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className="footer-items">
                    <p className="p-style1">Contact</p>
                    <ul className="list-items p-style">
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affilates</li>
                    </ul>
                </div>
                <div className="footer-items">
                    <p className="p-style1">More</p>
                    <ul className="list-items p-style">
                        <li>Airlinefees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                    </ul>
                </div>
                <div className="footer-items p-style">
                    <div className="socical-media">
                        <i className="fab fa-facebook-square socical-media-icon" />
                        <i className="fab fa-instagram-square socical-media-icon " />
                        <i className="fab fa-twitter-square socical-media-icon " />
                    </div>
                    <p style={{ fontSize: "20px" }}>Discover our app</p>
                    <div className="footer-items-app">
                        <button className="button-item">
                            <img src={GooglePlay} alt="google-play icon" className="google-play-icon" />
                            <span>
                                GET IT ON<br />
                                Google Play
                            </span>
                        </button>
                        <button className="button-item">
                            <img src={Apple} alt="apple icon" className="apple-icon" />
                            <span>
                                Avalible on the<br />
                                Apple Store
                            </span>
                        </button>

                    </div>

                </div>
            </div>

            <p style={{ fontSize: "14px", marginTop: "40px", paddingBottom: "20px" }} >All rights reserved@jadoo.co</p>

        </div>
    )
}

export default Footer
