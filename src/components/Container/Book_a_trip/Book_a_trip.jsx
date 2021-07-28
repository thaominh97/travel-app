import React, { memo } from 'react'
import './Book_a_trip.css'
import Group6 from '../../../assets/img/Group6.png'
import Group7 from '../../../assets/img/Group7.png'
import Group8 from '../../../assets/img/Group8.png'
import Rectangle17 from '../../../assets/img/Rectangle 17.jpg'
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
                            <p className="p-style">Choose Destination</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                    <li className="trip2-list_item">
                        <img src={Group7} alt="action-symbol" className="symbol-list" />
                        <div className="describe-list">
                            <p className="p-style">Make Payment</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                    <li className="trip2-list_item">
                        <img src={Group8} alt="car-symbol" className="symbol-list" />
                        <div className="describe-list">
                            <p className="p-style">Reach Airport on Selected Date</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="trip3">
                <div className="trip3-describe1">
                    <img src={Rectangle17} alt="trip img" className="trip3-img" />
                    <p className="p-style2">Trip To Greece</p>
                    <div className="trip3-describe1-infor1">
                        <p>14-29 June</p>
                        <div className="line" />
                        <p>by Robbin joseph</p>
                    </div>
                    <div>
                        <img src={Leaf} alt="leaf-icon" className="trip3-describe1-icon" />
                        <img src={Mapicon} alt="map icon" className="trip3-describe1-icon" />
                        <img src={sendIcon1} alt="send-icon" className="trip3-describe1-icon" />
                    </div>
                    <div className="trip3-describe1-infor2">
                        <img src={Building} alt="building" style={{ marginRight: "20px" }} />
                        <p>24 people going</p>
                        <img src={Heart} alt="heart icon" className="trip3-img-heart" />
                    </div>

                </div>

            <div className="trip4" >
                    <img src={Rectangle4} alt="rome" style={{ marginRight: "20px", height: "50px" }} />

                    <div className="trip4-describe">
                        <p>Ongoing</p>

                        <p className="p-style2">Trip to rome</p>
                        <p
                            style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "10px 5px 0 5px", }}
                        >
                            40%
                            <p className="p-style2" style={{ fontSize: "16px", margin:"-3px 0 0 5px" }}>completed</p>
                        </p>
                        <img src={Line2} alt="line-percent" style={{ marginTop: "-10px" }} />

                    </div>
            </div>
                <div className="background" />

            </div>
        </div>
    )
}

export default memo(Book_a_trip)
