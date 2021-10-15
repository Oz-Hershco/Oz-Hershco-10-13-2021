const axios = require('axios').default;
const weatherAPIKey = "YyrguLM3AGwLUswsAzbnJ0TaKcPvk6hD";

const handleAutoCompleteAPI = async (searchText) => {
    var result;
    await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${weatherAPIKey}&q=${searchText}`)
        .then(function (response) {
            // handle success
            result = response;
        })
        .catch(function (error) {
            // handle error
            result = error;
            // console.log(error);
        });
    return result;
}

export { handleAutoCompleteAPI }