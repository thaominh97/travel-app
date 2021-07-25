import React, { memo } from 'react'
import './Tes_sections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PersonImg from '../../../assets/img/Image.png'

library.add(fas, faAngleDown);

function Tes_sections() {
    return (
        <div className="tes-sections">
            <div className="tes-left">
                <h6>TESTIMONIALS</h6>
                <h2>
                    What People Say
                    About Us.
                </h2>
                <button><span className="button-indicate" /></button>
            </div>
            <div className="tes-right">
                <div className="infor-staff" >
                    <img src={PersonImg} alt="Person img" className="img-person" />
                    <div className="infor-person">
                        <p>“On the Windows talking painted pasture yet its express parties use.
                            Sure last upon he same as knew next.
                            Of believed or diverted no.”
                        </p>
                        <p className="p-style">Mike taylor</p>
                        <p>Lahore, Pakistan</p>

                    </div>
                </div>
                <div className="infor-manager">
                    <p>“On the Windows talking painted pasture yet its express parties use.
                        Sure last upon he same as knew next.
                        Of believed or diverted no.”
                    </p>
                    <p className="p-style">Chris Thomas</p>
                    <p>CEO of Red Button</p>

                </div>
            </div>

            <div className="pagination">
                <FontAwesomeIcon icon="angle-up" className="angle-up"/>
                <FontAwesomeIcon icon="angle-down" className="angle-down" />
            </div>

        </div>
    )
}

export default memo(Tes_sections)
