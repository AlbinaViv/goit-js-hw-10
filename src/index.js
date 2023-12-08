import Notiflix from 'notiflix';

const select = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

fetchBreeds().then(response => console.log(response.data)).catch(error => console.log(error));


// select.style.visibility = 'hidden';

// select.style.visibility = 'visible';
// loader.style.display = 'none';

