import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../Content/Content.css'
import Plane1 from '../../../assets/img/Group.png'
import Plane2 from '../../../assets/img/plane.png'
import Traveller from '../../../assets/img/Traveller.png'
import LineDecore from '../../../assets/img/linecolor.png'

library.add(fas);

function Content() {
    return (
        <div className="content">
            <div className="content-left">
                <p className="tagline">BEST DESTINATIONS AROUND THE WORLD</p>
                <h1 className="font-volkhov-bold">
                    Travel, enjoy
                    and live a new
                    and full life
                </h1>
                <p className="desc">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening.
                    Park gate sell they west hard for the.
                </p>


                <div className="button-icon">
                    <button className="button1 font-ggsans-regular" >Find out more</button>
                    <div className="play-demo">
                        <span className="play-circle"><FontAwesomeIcon icon="play-circle" /></span>
                        <p className="play-demo_text">Play Demo</p>
                    </div>

                </div>
            </div>
            <div className="content-img">
                <img src={LineDecore} className="line-decore" alt="line-decore"/>
                <img src={Plane1} className="plane1" alt="plane" />

                <img src={Traveller} className="traveller" alt="traveller" />

                <img src={Plane2} className="plane2" alt="plane" />
            </div>

        </div>
    )
}

export default Content
