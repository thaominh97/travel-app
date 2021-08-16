
import { API, Api_config } from '../../components/Header/Logic/api'

function RegisterAPI(body,callback) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        redirect: 'follow',
        headers : new Headers({
           'Content-Type': 'application/json',
           'Accept': 'application/json',
        })
    };

    fetch(`${API}${Api_config.register}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(callback && result){
                callback(result)
            }
        })
        .catch(error => console.log('error', error))
}

export default RegisterAPI



    

