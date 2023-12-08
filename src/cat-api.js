import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_a7Dpl7z7cG8JrUWUu3MjQTVLuwJRGigrAg50k5H7CAA37iPfkUpHbKc33fw4G6qw';

const catUrl = 'https://api.thecatapi.com/v1/breeds';


async function fetchBreeds() {
   
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds')
        return response;
    } catch (error) {
        console.log(error.message);
        
    }
}

async function fetchCatByBreed(breedId) {
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
        return response;
    } catch (error) {
        console.log(error.message);
        
    }
    
}

export { fetchBreeds, fetchCatByBreed};