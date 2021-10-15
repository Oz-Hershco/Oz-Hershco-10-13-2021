const axios = require('axios').default;
const weatherAPIKey = "YyrguLM3AGwLUswsAzbnJ0TaKcPvk6hD";

const handleAutoCompleteAPI = (searchText) => {
    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${weatherAPIKey}&q=${searchText}`)
        .then(function (response) {
            // handle success
            // console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}