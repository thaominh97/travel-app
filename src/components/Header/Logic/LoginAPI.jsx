
import { API, Api_config } from './api'

function LoginAPI(body,callback) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        redirect: 'follow',
        headers : new Headers({
           'Content-Type': 'application/json',
        })
    };

    fetch(`${API}${Api_config.login}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(callback && result){
                callback(result)
            }
        })
        .catch(error => console.log('error', error))
}

export default LoginAPI



    

