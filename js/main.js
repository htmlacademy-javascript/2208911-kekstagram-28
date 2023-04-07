import './photo-editing-scale.js';
import './photo-editing-effect.js';
import {setUserFormSubmit} from './sending-data.js';
import './showing-big-photos.js';
import {setDefaultClick, setRandomClick, setDiscussedClick, buttonFilterDefault, buttonFilterRandom, buttonFilterDiscussed, COUNT_RANDOM_PHOTO} from './filtering-published-photos.js';
import {photosList} from './viewing-photos.js';
import {getData} from './api.js';
import {showAlertError} from './utils/helpers.js';

getData()
  .then((photos) => {
    photosList(photos);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');

    setDefaultClick(() => photosList(photos), buttonFilterDefault);

    setRandomClick(() => {
      photosList(photos.sort(() => Math.random() - 0.5));
      photosList(photos.slice(0, COUNT_RANDOM_PHOTO));
    }, buttonFilterRandom);

    setDiscussedClick(() => photosList(photos.sort(() => {})), buttonFilterDiscussed);
  })
  .catch((err) => showAlertError(err.message));

setUserFormSubmit();
