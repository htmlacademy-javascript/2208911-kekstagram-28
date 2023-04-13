const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

const removeActiveButton = () => {
  filterDefaultButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');
};

const setСlickButton = (cb, button) => {
  button.addEventListener('click', () => {
    removeActiveButton();
    button.classList.add('img-filters__button--active');
    cb();
  });
};

const setDefaultClick = (cb, button) => setСlickButton(cb, button);
const setRandomClick = (cb, button) => setСlickButton(cb, button);
const setDiscussedClick = (cb, button) => setСlickButton(cb, button);

export {setDefaultClick, setRandomClick, setDiscussedClick, filterDefaultButton, filterRandomButton, filterDiscussedButton};
