import './photo-editing-scale.js';
import './photo-editing-effect.js';
import './showing-big-photos.js';
import './uploading-own-photo.js';
import {setUserFormSubmit} from './sending-data.js';
import {RENDER_DELAY, COUNT_RANDOM_PHOTO} from './const/const.js';
import {setDefaultClick, setRandomClick, setDiscussedClick, buttonFilterDefault,
  buttonFilterRandom, buttonFilterDiscussed} from './filtering-published-photos.js';
import {photosList} from './viewing-photos.js';
import {getData} from './api.js';
import {showAlertError, debounce} from './utils/helpers.js';

getData()
  .then((photos) => {
    photosList(photos);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');

    setDefaultClick(debounce(() => photosList(photos.slice()), RENDER_DELAY), buttonFilterDefault);

    setRandomClick(debounce(() =>
      photosList(photos
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, COUNT_RANDOM_PHOTO)),RENDER_DELAY),
    buttonFilterRandom);

    setDiscussedClick(debounce(() => photosList(photos
      .slice()
      .sort((a, b) => Math.sign(b.comments.length - a.comments.length))), RENDER_DELAY),
    buttonFilterDiscussed);
  })
  .catch((err) => showAlertError(err.message));

setUserFormSubmit();
