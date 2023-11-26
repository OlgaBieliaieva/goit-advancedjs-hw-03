import axios from 'axios';

const URL_FOR_ALL_BREEDS = 'https://api.thecatapi.com/v1/breeds/?';
const URL_FOR_SELECTED_BREED = ' https://api.thecatapi.com/v1/images/search?';
const REQUEST_OPTIONS = {
  api_key:
    'live_4OV6mO4kCm8Wvp0obaFUUKjV7Fg0aDGCrA5iSKIh93pBZ22atpg8saVdJ0BQ988s',
  breed_ids: '',  
};

export async function fetchBreeds() {
  const options = new URLSearchParams(REQUEST_OPTIONS);
  try {
    const response = await axios.get(`${URL_FOR_ALL_BREEDS}${options}`);
    return response.data;
  } catch (error) {
    console.log(error);    
  }
}

export async function fetchCatByBreed(breedId) {
  if (REQUEST_OPTIONS.breed_ids !== breedId) {
    REQUEST_OPTIONS.breed_ids = breedId;
  }
  const options = new URLSearchParams({...REQUEST_OPTIONS, limit: 15});
  try {
    const response = await axios.get(`${URL_FOR_SELECTED_BREED}${options}`);    
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
