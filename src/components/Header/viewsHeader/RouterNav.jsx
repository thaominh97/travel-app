import React, { memo } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { HomeScreen } from "../../Header/viewsHeader/Home/Home"
import { BookingsScreen } from "../../Header/viewsHeader/Bookings/Bookings"
import { FlightsScreen } from "../../Header/viewsHeader/Flights/Flights"
// import { LoginScreen } from "../../Header/viewsHeader/Login/Login"
import { DestinationScreen } from "../../Header/viewsHeader/Destination/Destination"
import { HotelsScreen } from "../../Header/viewsHeader/Hotels/Hotels"

const RouterNav = () => {
    return (
        <Switch>
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/bookings" component={BookingsScreen} />
            <Route exact path="/flights" component={FlightsScreen} />
            <Route exact path="/hotels" component={HotelsScreen} />
            <Route exact path="/destination" component={DestinationScreen} />
            {/* <Route exact path="/login" component={LoginScreen} /> */}
        </Switch>
    )
}
export default memo(RouterNav)