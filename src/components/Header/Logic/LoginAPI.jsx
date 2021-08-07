
import { API, Api_config } from './api'

function LoginAPI(body,callback) {
    const requestOptions = {
        method: 'POST',
        body: body,
        redirect: 'follow'
    };

    fetch(`${API}${Api_config.login}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(callback && result){
                callback(result)
            }
        })
        .catch(error => console.log('error', error))
}

export default LoginAPI



    

