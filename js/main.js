import './photo-editing-scale.js';
import './photo-editing-effect.js';
import './sending-data.js';
import './showing-big-photos.js';
import {photosList} from './viewing-photos.js';
import {getData} from './api.js';
import {showAlertError} from './utils/helpers.js';

getData()
  .then((photos) => photosList(photos))
  .catch((err) => showAlertError(err.message));
