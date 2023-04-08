const COUNT_RANDOM_PHOTO = 10;

const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const removeActiveButton = () => {
  buttonFilterDefault.classList.remove('img-filters__button--active');
  buttonFilterRandom.classList.remove('img-filters__button--active');
  buttonFilterDiscussed.classList.remove('img-filters__button--active');
};

const setButtonСlick = (cb, button) => {
  button.addEventListener('click', () => {
    removeActiveButton();
    button.classList.add('img-filters__button--active');
    cb();
  });
};

const setDefaultClick = (cb, button) => setButtonСlick(cb, button);
const setRandomClick = (cb, button) => setButtonСlick(cb, button);
const setDiscussedClick = (cb, button) => setButtonСlick(cb, button);

export {setDefaultClick, setRandomClick, setDiscussedClick, buttonFilterDefault, buttonFilterRandom, buttonFilterDiscussed, COUNT_RANDOM_PHOTO};
