import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_a7Dpl7z7cG8JrUWUu3MjQTVLuwJRGigrAg50k5H7CAA37iPfkUpHbKc33fw4G6qw';

const catUrl = 'https://api.thecatapi.com/v1/breeds';


function fetchBreeds() {
    const response = axios.get('https://api.thecatapi.com/v1/breeds')
    return response;
}

function fetchCatByBreed(breedId) {
    
}

export { fetchBreeds, fetchCatByBreed};