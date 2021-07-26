import React, { memo } from 'react'
import './category.css'
import group from '../../../assets/img/Groupplane.png'
import group1 from '../../../assets/img/Group1.png'
import group2 from '../../../assets/img/Group2.png'
import group4 from '../../../assets/img/Group4.png'
import group5 from '../../../assets/img/Group5.png'
import group3 from '../../../assets/img/Rectangle 157.png'

function Category() {
    return (
        <div className="category">
            <h6>CATEGORY</h6>
            <h2>We Offer Best Services</h2>
            <img src={group4} className="group4" alt="" />

            <div className="category-list">
                <div className="category-item">
                    <img src={group1} alt="Calculated Weather" className="calculated-item" />
                    <p className="category-title font-ggsans-regular">Calculated Weather</p>
                    <p className="describe">
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>
                <div className="category-item">
                    <div className="category-item_plane" >
                        <img src={group} alt="plane" style={{ height: "120px", width: "120px" }} />
                        <div style={{ marginTop: "0" }}>
                            <p className="category-title font-ggsans-regular">Best Flights</p>
                            <p className="describe">
                                Engrossed listening. Park gate sell they west hard for the.
                            </p>
                        </div>

                    </div>
                    <img src={group3} alt="pink-img" className="pink-img" />
                </div>
                <div className="category-item">
                    <img src={group2} alt="Local Events" className="event-item" />
                    <p className="category-title font-ggsans-regular">Local Events</p>
                    <p className="describe">
                        Barton vanity itself do in it. Preferd to men it engrossed listening.
                    </p>
                </div>
                <div className="category-item">
                    <img src={group5} alt="Customization" className="customization-item" />
                    <p className="category-title font-ggsans-regular">Customization</p>
                    <p className="describe">
                        We deliver outsourced aviation services for military customers
                    </p>
                </div>

            </div>
        </div>
    )
}

export default memo(Category)
