import React, { memo } from 'react'
import './Logos.css'
import Axon from '../../../assets/img/logo1.png'
import Jetstart from '../../../assets/img/logo2.png'
import Expedia from '../../../assets/img/logo3.png'
import Qantas from '../../../assets/img/logo4.png'
import Alitalia from '../../../assets/img/logo5.png'

function Logos() {
    return (
        <div className="logos">
            <img src={Axon} alt="Axon" className="logos-item item1"/>
            <img src={Jetstart} alt="Jetstart" className="logos-item item2" />
            <img src={Expedia} alt="Expedia " className="logos-item item3" />
            <img src={Qantas} alt="Qantas" className="logos-item item4" />
            <img src={Alitalia} alt="Alitalia" className="logos-item item5"/>            
        </div>
    )
}

export default memo(Logos)
