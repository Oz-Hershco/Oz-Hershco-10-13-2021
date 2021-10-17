import { weatherAPIKey } from "./Variables";

const axios = require('axios').default;



const getCurrentWeatherByCityId = (locationKey) => {
    // axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${weatherAPIKey}`)
    //     .then(function (response) {
    //         console.log(response)
    //     })
    //     .catch(function (error) {

    //         console.log(error);
    //     });
}

export { getCurrentWeatherByCityId };

