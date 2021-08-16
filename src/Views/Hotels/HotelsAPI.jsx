


function HotelsAPI(body,callback) {
    const requestOptions = {
        method: 'GET',
        body: JSON.stringify(body),
        redirect: 'follow',
        headers : new Headers({
           'Content-Type': 'application/json',
        })
    };

    fetch("https://restcountries.eu/rest/v2/all", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(callback && result){
                callback(result)
            }
        })
        .catch(error => console.log('error', error))
}

export default HotelsAPI



    

