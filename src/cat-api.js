import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_a7Dpl7z7cG8JrUWUu3MjQTVLuwJRGigrAg50k5H7CAA37iPfkUpHbKc33fw4G6qw';

const catUrl = 'https://api.thecatapi.com/v1/breeds';


function fetchBreeds() {
    return axios
        .get(`${catUrl}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            throw error;
        });
}

function fetchCatByBreed(breedId) {
    return axios
        .get(`${catUrl}/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export { fetchCatByBreed, fetchBreeds };