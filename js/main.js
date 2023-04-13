import './photo-editing-scale.js';
import './photo-editing-effect.js';
import './showing-big-photos.js';
import './uploading-own-photo.js';
import {setUserFormSubmit} from './sending-data.js';
import {RENDER_DELAY, COUNT_RANDOM_PHOTO} from './const/const.js';
import {setDefaultClick, setRandomClick, setDiscussedClick, filterDefaultButton,
  filterRandomButton, filterDiscussedButton} from './filtering-published-photos.js';
import {showPhotosList} from './viewing-photos.js';
import {getData} from './api.js';
import {showAlertError, debounce} from './utils/helpers.js';

getData()
  .then((photos) => {
    showPhotosList(photos);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');

    setDefaultClick(debounce(() => showPhotosList(photos.slice()), RENDER_DELAY), filterDefaultButton);

    setRandomClick(debounce(() =>
      showPhotosList(photos
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, COUNT_RANDOM_PHOTO)),RENDER_DELAY),
    filterRandomButton);

    setDiscussedClick(debounce(() => showPhotosList(photos
      .slice()
      .sort((a, b) => Math.sign(b.comments.length - a.comments.length))), RENDER_DELAY),
    filterDiscussedButton);
  })
  .catch((err) => showAlertError(err.message));

setUserFormSubmit();
