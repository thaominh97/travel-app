import React, { memo } from 'react'
import './Destinations.css'
import Rectangle1 from '../../../assets/img/Rectangle1.png'
import Rectangle2 from '../../../assets/img/Rectangle2.png'
import Rectangle3 from '../../../assets/img/Rectangle3.png'
import DesDecore from '../../../assets/img/Des-decore.png'
import SendIcon from '../../../assets/img/send2.png'


function Destinations() {
    return (
        <div className="destinations">
            <h6>Top Selling</h6>
            <h2>Top Destinations</h2>
            <div className="destinations-list">
                <div className="destinations-item">
                    <img src={Rectangle1} alt="Roma-Italty" />
                    <div className="item-infor">
                        <div className="location">
                            <p>Rome, Italty</p>
                            <p>$5,42k</p>
                        </div>
                        <div className="time">
                            <img src={SendIcon} alt="send icon" className="send-icon" />
                            <p>10 Days Trip</p>
                        </div>
                    </div>

                </div>
                <div className="destinations-item">
                    <img src={Rectangle2} alt="London-UK" />
                    <div className="item-infor">
                        <div className="location">
                            <p>London, UK</p>
                            <p>$4,2k</p>
                        </div>

                        <div className="time">
                            <img src={SendIcon} alt="send icon" className="send-icon" />
                            <p>12 Days Trip</p>
                        </div>
                    </div>
                </div>
                <div className="destinations-item ">
                    <img src={Rectangle3} alt="Europe" />
                    <div className="item-infor ">
                        <div className="location">
                            <p>Full Europe</p>
                            <p>$15k</p>
                        </div>

                        <div className="time">
                            <img src={SendIcon} alt="send icon" className="send-icon"/>
                            <p>28 Days Trip</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <img src={DesDecore} alt="Des-Decore" className="des-decore"/>

        </div>
    )
}

export default memo(Destinations)
