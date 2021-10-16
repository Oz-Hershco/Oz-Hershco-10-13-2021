import { imageSearchAPIKey } from "./Variables";

const axios = require('axios').default;

const getLocationBasedImage = () => {

    axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${imageSearchAPIKey}`)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {

            console.log(error);
        });
}

export { getLocationBasedImage };

