import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
  searchSelect: document.querySelector('.breed-select'),  
  searchResult: document.querySelector('.cat-info'),
};
  refs.searchSelect.addEventListener('change', getSelectedBreed)

  fetchBreeds()
  .then(data => createSelectOptions(data))
  .catch(() => showError());
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');

function createSelectOptions(data) {
  console.log(data);
  const optionsMarkup = data
    .map(({ id, name }) => `<option class="breed-option" value="${id}">${name}</option>`)
    .join('');
    refs.searchSelect.insertAdjacentHTML('beforeend', optionsMarkup)
}

function getSelectedBreed(event) {
  console.log(event);
  const breedId = event.target.value;
  console.log(breedId); 
  fetchCatByBreed(breedId).then().catch(Notify.failure('Oops! Something went wrong! Try reloading the page!'));
}

function showError() {
  // console.log(error);
 return Notify.failure('Oops! Something went wrong! Try reloading the page!')
}