import React, { memo } from 'react'
import Navigation from './Top_Nav'


function Header() {
    return (
        <div>
            <Navigation/>            
        </div>
    )
}

export default memo(Header)
