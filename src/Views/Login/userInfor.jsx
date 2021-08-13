import React, { useState, useEffect } from 'react'
import { API, Api_config } from '../../components/Header/Logic/api';



function UserInfor() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        async function apiapi(){
            const res = await fetch(`${API}${Api_config.users}/3`
            // ,{
            //     headers : {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            );
            const json = await res.json();
            console.log(json.data)
            setUsers(json.data)
        }
        apiapi()
    }, []);

    return (
        <div key={user.id}>
            <p>{user.first_name}</p>

        </div>
    )
}

export default UserInfor
