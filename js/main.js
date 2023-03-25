import './photo-editing.js';
import './sending-data.js';
import {publishPhotos, usersPhotoList} from './viewing-photos.js';
import {showBigPhoto, bigPicture} from './showing-big-photos.js';
import {isEscapeKey} from './utils/helpers.js';

const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

usersPhotoList.addEventListener('click', (evt) => {
  evt.preventDefault();

  const child = evt.target.closest('[data-id]');

  if (!child) {
    return;
  }

  const photo = publishPhotos.find((element) => element.id === Number(child.dataset.id));

  if (photo !== undefined) {
    showBigPhoto(photo);
  }

  bigPictureCancel.addEventListener('click', () => {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', (key) => {
    key.preventDefault();

    if (isEscapeKey(key)) {
      bigPicture.classList.add('hidden');
    }
  });
});
