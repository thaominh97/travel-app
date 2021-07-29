import React, { memo } from 'react'
import './Tes_sections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PersonImg from '../../../assets/img/Image.png'

library.add(fas, faAngleDown);

function Tes_sections() {
    const  randomColor1 = () =>{
        var color1 = '#181E4B';
        var color2 = '#BCB7C2';
        document.getElementById("button1").style.color = color1;
        document.getElementById("button2").style.color = color2;             
    }
    const  randomColor2 = () =>{
        var color1 = '#BCB7C2';
        var color2 = '#181E4B';
        document.getElementById("button1").style.color = color1;
        document.getElementById("button2").style.color = color2;             
    }

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
                <button id="button1" onClick={randomColor1}
                 className="pagination-button"
                 >
                     <FontAwesomeIcon icon="angle-up" className="angle-up"/>
                </button>
                <button id="button2" onClick={randomColor2} 
                className="pagination-button"
                >
                    <FontAwesomeIcon icon="angle-down" className="angle-down" />
                </button>
            </div>

        </div>
    )
}

export default memo(Tes_sections)
