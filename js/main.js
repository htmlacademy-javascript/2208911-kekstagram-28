import {COUNT_PUBLISH_PHOTO} from './const/const.js';
import {createPublishPhoto} from './publishing-photo.js';
import './photo-editing.js';
import './sending-data.js';
import './viewing-photos.js';

const arrayPhotos = Array.from({length: COUNT_PUBLISH_PHOTO}, createPublishPhoto);
