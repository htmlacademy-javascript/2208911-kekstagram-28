import './photo-editing.js';
import './sending-data.js';
import {publishPhotos, usersPhotoList} from './viewing-photos.js';
import {showBigPhoto, bigPicture, commentsLoader} from './showing-big-photos.js';
import {isEscapeKey} from './utils/helpers.js';

const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  commentsLoader.classList.remove('hidden');
};

usersPhotoList.addEventListener('click', (evt) => {
  const child = evt.target.closest('[data-id]');

  if (!child) {
    return;
  }

  evt.preventDefault();
  const photo = publishPhotos.find((element) => element.id === Number(child.dataset.id));

  if (photo !== undefined) {
    showBigPhoto(photo);
  }

  bigPictureCancel.addEventListener('click', () => {
    evt.preventDefault();
    closeBigPicture();
  });

  document.addEventListener('keydown', (key) => {
    key.preventDefault();

    if (isEscapeKey(key)) {
      closeBigPicture();
    }
  });
});
