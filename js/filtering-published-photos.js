import {getUniqueId} from './utils/helpers.js';

const COUNT_RANDOM_PHOTO = 10;

const filtersImg = document.querySelector('.img-filters');
const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const photosFiltration = () => {
  filtersImg.classList.remove('img-filters--inactive');
};

const setDefaultClick = (cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    cb();
  });
};

const getRandomFilter = (photos) => {
  const a = Array.from({length: COUNT_RANDOM_PHOTO}, getUniqueId);

  photos.forEach((publish) => {
    if (a.includes(publish.id)) {
      return true;
    }
  });
};


const setRandomClick = (cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    // 10 случайных, не повторяющихся фотографий
    cb();
  });
};

const setDiscussedClick = (cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    // фотографии, отсортированные в порядке убывания количества комментариев
    cb();
  });
};

export {photosFiltration, setDefaultClick, setRandomClick, setDiscussedClick, getRandomFilter};
