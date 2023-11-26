import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import iziToast from 'izitoast';
import Swiper from 'swiper/bundle';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const refs = {
  searchSelect: document.querySelector('.breed-select'),
  searchResult: document.querySelector('.cat-info'),
  swiperContainer: document.querySelector('.swiper-container'),
  swiper: document.querySelector('.swiper'),
  swiperWrapper: document.querySelector('.swiper-wrapper'),
  descriptionWrapper: document.querySelector('.description-container'),
  loader: document.querySelector('.loader'),
};

refs.searchSelect.addEventListener('change', getSelectedBreed);

fetchBreeds()
  .then(data => createSelectOptions(data))
  .catch(() => showError());

function createSelectOptions(data) {
  const optionsMarkup = data
    .map(
      ({ id, name }) =>
        `<option class="breed-option" value="${id}">${name}</option>`
    )
    .join('');
  refs.searchSelect.insertAdjacentHTML('beforeend', optionsMarkup);
}

function getSelectedBreed(event) {
  refs.loader.classList.remove('visually-hidden');
  const breedId = event.target.value;
  if (breedId !== '') {
    refs.swiperContainer.classList.add('visually-hidden');
    refs.descriptionWrapper.innerHTML = '';
    refs.swiperWrapper.innerHTML = '';
    fetchCatByBreed(breedId)
      .then(data => createCatInfoMarkup(data))
      .catch(e => showError(e));
  } else {
    refs.descriptionWrapper.innerHTML = '';
    refs.swiperContainer.innerHTML = '';
    refs.loader.classList.add('visually-hidden');
  }
}

function createCatInfoMarkup(data) {
  const catInfo = data[0].breeds[0];
  const imageList = data.map(item => item.url);
  const ratingStars = [1, 2, 3, 4, 5];

  const swiperMarkup = imageList
    .map(
      url =>
        `        
        <div class="swiper-slide"><img class="slide-img" src="${url}" alt="${catInfo.name}" width="500" height="376"></div>`
    )
    .join('');

  const catInfoMarkup = `<h2>${catInfo.name}</h2>
    <p class="label">Origin: <span class="text">${catInfo.origin}</span></p>    
    <p class="label">Weight: <span class="text">${
      catInfo.weight.metric
    }</span> kg</p>
    <p class="label">Weight: <span class="text">${
      catInfo.weight.metric
    }</span> kg</p>
    <p class="label">Lifetime: <span class="text">${
      catInfo.life_span
    }</span> yrs</p>
    <p class="label">Weight: <span class="text">${
      catInfo.weight.metric
    }</span> kg</p>
    <p class="label">Temperament: <span class="text">${
      catInfo.temperament
    }</span></p>
    <p class="description">${catInfo.description}</p>
    <ul class="properties">
    <li>
    <p class="label">Affection level</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.affection_level >= item
          ? `<li><svg width="30" height="30">
    <use href="/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Adaptability</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.adaptability >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Child friendly</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.child_friendly >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Dog friendly</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.dog_friendly >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Energy level</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.energy_level >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Grooming</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.grooming >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Health issues</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.health_issues >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Intelligence</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.intelligence >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Shedding level</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.shedding_level >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Social needs</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.social_needs >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Stranger friendly</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.stranger_friendly >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    <li>
    <p class="label">Vocalisation</p>
    <ul class="stars">
    ${ratingStars
      .map(item =>
        catInfo.vocalisation >= item
          ? `<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`
          : `<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`
      )
      .join('')}
    </ul>    
    </li>
    </ul>
    <a href="${catInfo.wikipedia_url}"> Learn more </a>`;

  refs.loader.classList.add('visually-hidden');
  refs.swiperWrapper.insertAdjacentHTML('afterbegin', swiperMarkup);
  initSwiper();
  refs.swiperContainer.classList.remove('visually-hidden');
  refs.descriptionWrapper.insertAdjacentHTML('beforeend', catInfoMarkup);
}

function initSwiper() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const swiper = new Swiper('.swiper', { ...swiperOptions });
  refs.swiper.addEventListener('mouseover', function () {
    swiper.autoplay.stop();
  });

  refs.swiper.addEventListener('mouseout', function () {
    swiper.autoplay.start();
  });
}

function showError(e) {
  iziToast.error({
    title: 'Oops!',
    message: 'Something went wrong! Try reloading the page!',
  });
}
