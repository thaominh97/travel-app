import React, { memo } from 'react'
import './Subscribe.css'
import '../../../assets/fontawesome-free/css/all.css'
import PlusImg from '../../../assets/img/Group3.png'
import SendIcon from '../../../assets/img/send3.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<FontAwesomeIcon icon="envelope" />

function Subscribe() {
    return (
        <div className="subscribe">
            
            <img src={SendIcon} alt="send icon" className="send-icon" />
            <p className="sub-text">
                Subscribe to get information, latest news and other
                    interesting offers about Cobham
                
            </p>
            <div className="button-input">
                <input type="text" placeholder="&#f0e0; Your email" className="input-sub" />
                
                <button type="submit" className="button-sub">Subscribe</button>
            </div>
            
            
            <img src={PlusImg} alt="plus-img" className="plus-img"/>


        </div>
    )
}

export default memo(Subscribe)
