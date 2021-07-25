import React, { memo } from 'react'
import './Book_a_trip.css'
import Group6 from '../../../assets/img/Group6.png'
import Group7 from '../../../assets/img/Group7.png'
import Group8 from '../../../assets/img/Group8.png'
import Rectangle17 from '../../../assets/img/Rectangle 17.jpg'
import Line from '../../../assets/img/Line 3.png'
import Rectangle4 from '../../../assets/img/Rectangle4.png'
import Heart from '../../../assets/img/heart.png'
import Leaf from '../../../assets/img/LEAF.png'
import Mapicon from '../../../assets/img/map icon.png'
import sendIcon1 from '../../../assets/img/send1.png'
import Building from '../../../assets/img/building.png'
import Line2 from '../../../assets/img/line 2.png'


function Book_a_trip() {
    return (
        <div className="trip">
            <div className="trip1">
                <h6>Easy and Fast</h6>
                <h2>
                    Book Your Next Trip<br />
                    In 3 Easy Steps
                </h2>
            </div>

            <div className="trip2">
                <ul className="trip2-list">
                    <li className="trip2-list_item">
                        <img src={Group6} alt="line-symbol" className="symbol-list" />
                        <div className="describe-list">
                            <p style={{ fontWeight: "bold", margin: "0" }}>Choose Destination</p>
                            <p style={{ margin: "0" }}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                    <li className="trip2-list_item">
                        <img src={Group7} alt="action-symbol" className="symbol-list" />
                        <div className="describe-list font-poppin-medium">
                            <p style={{ fontWeight: "bold", margin: "0" }}>Make Payment</p>
                            <p style={{ margin: "0" }}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                    <li className="trip2-list_item">
                        <img src={Group8} alt="car-symbol" className="symbol-list" />
                        <div className="describe-list">
                            <p style={{ fontWeight: "bold", margin: "0" }}>Reach Airport on Selected Date</p>
                            <p style={{ margin: "0" }}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="trip3">
                <div className="trip3-describe1">
                    <img src={Rectangle17} alt="trip" />
                    <p style={{ fontSize: "18px", color: "#080809", fontWeight: "bold" }}>Trip To Greece</p>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p style={{ fontSize: "16px", color: "#84829A", marginRight: "3px" }}>14-29 June</p>
                        <img src={Line} alt="line" style={{ marginRight: "20px", height: "16px" }} />
                        <p style={{ fontSize: "16px", color: "#84829A" }}>by Robbin joseph</p>
                    </div>
                    <div>
                        <img src={Leaf} alt="leaf-icon" style={{ marginRight: "20px", height: "36px" }} />
                        <img src={Mapicon} alt="map icon" style={{ marginRight: "20px", height: "36px" }} />
                        <img src={sendIcon1} alt="send-icon" style={{ marginRight: "20px", height: "36px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <img src={Building} alt="building" style={{ marginRight: "20px", height: "16px" }} />
                            <p style={{ fontSize: "16px", color: "#84829A" }}>24 people going</p>
                        </div>
                        <img src={Heart} alt="heart icon" style={{ height: "19px", width: "20px",zIndex:"3", marginRight:"20px" }} />

                    </div>

                </div>

                <div className="trip3-describe2" >
                    <img src={Rectangle4} alt="rome" style={{ marginRight: "20px", height: "50px" }} />

                    <div className="trip3-item">
                        <p style={{ fontSize: "16px", color: "#84829A", margin:"0" }}>Ongoing</p>

                        <p style={{ fontSize: "18px", color: "#080809", fontWeight: "bold", margin:"6px 0"  }}>Trip to rome</p>
                        <p
                            style={{ fontSize: "16px", color: "#8A79DF", display: "flex", flexDirection: "row", alignItems: "center", margin:"10px 0 0 5px"  }}
                        >
                            40%
                            <p style={{ fontSize: "16px", color: "#080809", fontWeight: "bold", margin: "0 5px" }}>completed</p>
                        </p>
                        <img src={Line2} alt="line-percent" style={{marginTop:"-10px"}} />

                    </div>
                </div>
                <div className="background" />

            </div>
        </div>
    )
}

export default memo(Book_a_trip)
