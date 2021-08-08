import React, { memo } from 'react'
import './Container.css'
import Content from './Content/Content'
import Category from './Category/Category'
import Destinations from './Destinations/Destinations'
import BookTrip from './Book_a_trip/Book_a_trip'
import TesSections from './Tes_sections/Tes_sections'
import Logos from './Logos/Logos'
import Subscribe from './Subscribe/Subscribe'


function Container() {
    return (
        <div className="container">
            <Content/>
            <Category/>
            <Destinations/> 
            <BookTrip/>
            <TesSections/>    
            <Logos/> 
            <Subscribe/>               
        </div>
    )
}

export default memo(Container)
