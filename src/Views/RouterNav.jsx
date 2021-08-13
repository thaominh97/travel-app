import React, { memo } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomeScreen } from "./Home/Home"
import { BookingsScreen } from "./Bookings/Bookings"
import { FlightsScreen } from "./Flights/Flights"
import { DestinationScreen } from "./Destination/Destination"
import { HotelsScreen } from "./Hotels/Hotels"
import { RegisterScreen} from './Register/Register'

const RouterNav = () => {
    return (
        <Switch>
            <Route exact path="/" 
            render={() => {
                return (
                    <Redirect to="/" />
                )
            }}
            component={HomeScreen}  />

            <Route exact path="/bookings" component={BookingsScreen} />

            <Route exact path="/flights" component={FlightsScreen} />

            <Route exact path="/hotels" component={HotelsScreen} />
            
            <Route exact path="/destination" component={DestinationScreen} />

            <Route exact path="/register" component={RegisterScreen} />
            
         
        </Switch>
    )
}
export default memo(RouterNav)