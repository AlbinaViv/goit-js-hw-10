import Notiflix from 'notiflix';

const select = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
// select.style.visibility = 'hidden';
// errorEl.style.visibility = 'hidden';

// select.style.visibility = 'visible';
// loader.style.display = 'none';



fetchBreeds().then(response => {
    optionMarkup(response.data);
    select.removeAttribute("hidden")
}).catch(error => Notiflix.Notify.failure(error.message)).finally(() => { loaderEl.classList.add("is-hidden")})

function optionMarkup(data) {
  const optionsArr = data.map(({id, name}) => `<option value="${id}">${name}</option>`
  ).join('');
select.insertAdjacentHTML("beforeend", optionsArr)
}

select.addEventListener("change", getInfo);

function getInfo(evt) {
    loaderEl.classList.remove("is-hidden");
    catInfo.innerHTML = "";

    fetchCatByBreed(evt.target.value).then(response => markupCatInfo(response.data)).catch(error => {
        Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    select.setAttribute("hidden", true);
    }).finally(() => { loaderEl.classList.add("is-hidden") });
    
}

function markupCatInfo(data) {
    const { url } = data[0];
    const { name, description, temperament } = data[0].breeds[0];
    const catInfoMarkup = `<img class="cat-info" src="${url}" alt="${name}" width="300" height="200"/> <div class="container"><h1>${name}</h1><p>${description}</p><p><b>Temperament: </b>${temperament}</p></div>`;
    catInfo.innerHTML = catInfoMarkup;
}






