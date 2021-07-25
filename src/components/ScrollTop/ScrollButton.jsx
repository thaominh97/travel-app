import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './scrollButton.css'

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible &&
            <button type="button" 
            className="scroll-button p-style1" 
            onClick={scrollToTop} 
            title="Go to top"
            >
                <FontAwesomeIcon icon="angle-up" />
            </button>
            }
        </div>
    )
}

export default ScrollButton
