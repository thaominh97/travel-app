import React, { memo } from "react";
import {API, Api_config} from '../../components/Header/Logic/api'
import '../Bookings/Booking.css'

const Bookings = () => {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch(`${API}${Api_config.user}`);
        const json = await res.json();
        setUsers(json.data);
    };
    React.useEffect(() => {
        f();
    }, []);
    return (
        <div className="booking">
            <h1>Booking one of People!!!</h1>
            <div className="booking__infor">
                {users.length &&
                    users.map((user) => {
                        return (
                            <div className="infor__detail">
                            <div key={user.id} className="infor__users">
                                <p>
                                    <strong>{user.first_name}</strong>
                                </p>
                                <p>{user.email}</p>
                                <img key={user.avatar} src={user.avatar} />
                            </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export const BookingsScreen = memo(Bookings)