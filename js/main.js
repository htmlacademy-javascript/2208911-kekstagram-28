import './photo-editing-scale.js';
import './photo-editing-effect.js';
import {setUserFormSubmit} from './sending-data.js';
import './showing-big-photos.js';
import {photosFiltration, setDefaultClick, setRandomClick} from './filtering-published-photos.js';
import {photosList} from './viewing-photos.js';
import {getData} from './api.js';
import {showAlertError, getUniqueId} from './utils/helpers.js';

const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const usersPhotoList = document.querySelector('.pictures');

getData()
  .then((photos) => {
    photosList(photos);
    photosFiltration();
    setDefaultClick(() => {
      photosList(photos);
    });
    setRandomClick(() => {

      const a = Array.from({length: 10}, getUniqueId);

      const publishPhotoListFragment = document.createDocumentFragment();

      photos
        .slice()
        .forEach((publish) => {
          if (a.includes(publish.id)) {
            const templateElement = template.cloneNode(true);

            templateElement.querySelector('.picture__img').src = publish.url;
            templateElement.querySelector('.picture__likes').textContent = publish.likes;
            templateElement.querySelector('.picture__comments').textContent = publish.comments.length;
            templateElement.dataset.id = publish.id;

            publishPhotoListFragment.appendChild(templateElement);
          }
        });

      const picturesTitle = document.querySelector('.pictures__title');
      const imgUpload = document.querySelector('.img-upload');

      usersPhotoList.innerHTML = '';
      usersPhotoList.append(picturesTitle);
      usersPhotoList.append(imgUpload);
      usersPhotoList.appendChild(publishPhotoListFragment);
    });
    // setDiscussedClick(() => photosList(photos)); // не обращай я работаю над следующей домашкой :)
  })
  .catch((err) => showAlertError(err.message));

setUserFormSubmit();
