import React, { memo } from "react";
import {API, Api_config} from '../../components/Header/Logic/api'
import '../Destination/Destination.css'
const Destination = () => {
    const [resource, setResourse] = React.useState([]);
    const handleList = async () => {
        const res = await fetch(`${API}${Api_config.resource}`);
        const json = await res.json();
        setResourse(json.data);
    };
    React.useEffect(() => {
        handleList();
    }, []);
    return (
        <div className="destination">
            <h1>Destination</h1>
            <div className="destination__infor">
                {resource.length &&
                    resource.map((item) => {
                        return (
                            <div key={item.id} className="destination__infor-detail" >
                                <p>
                                    <strong>{item.name}</strong> <br/>
                                    {item.year}
                                </p>
                                <p>{item.pantone_value}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export const DestinationScreen = memo(Destination)