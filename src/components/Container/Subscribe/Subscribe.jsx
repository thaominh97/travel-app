import React, { memo, useState } from 'react'
import './Subscribe.css'
import '../../../assets/fontawesome-free/css/all.css'
import PlusImg from '../../../assets/img/Group3.png'
import SendIcon from '../../../assets/img/send3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Subscribe() {

    const [infor, setInfor] = useState({email:""})
    console.log(infor)
    
    const handleSubcribe = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInfor({...infor, [name]: value })
    }
    
    return (
        <div className="subscribe">
            <img src={SendIcon} alt="send icon" className="sub-icon" />

            <div className="sub-infor">
                <p className="sub-text">
                    Subscribe to get information, latest news and other
                    interesting offers about Cobham

                </p>
                <form className="button-input">
                    <div>
                        <FontAwesomeIcon icon="envelope" className="envelope-icon" />
                        <input type="text" value={infor.value} name="email" onChange={handleSubcribe} placeholder="Your email" className="input-sub" />
                    </div>
                    <button type="submit" className="button-sub">Subscribe</button>
                </form>
            </div>

            <img src={PlusImg} alt="plus-img" className="plus-img" />


        </div>
    )
}

export default memo(Subscribe)
