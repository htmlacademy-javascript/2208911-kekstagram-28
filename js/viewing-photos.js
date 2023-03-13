import {arrayPhotos} from './publishing-photo.js';

const usersPhotoList = document.querySelector('.pictures');
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const publishPhoto = arrayPhotos();

const publishPhotoListFragment = document.createDocumentFragment();

publishPhoto.forEach(({url, likes, COMMENTS_COUNT}) => {
  const templateElement = template.cloneNode(true);
  templateElement.querySelector('.picture__img').src = url;
  templateElement.querySelector('.picture__likes').textContent = likes;
  templateElement.querySelector('.picture__comments').textContent = COMMENTS_COUNT;

  publishPhotoListFragment.appendChild(templateElement);
});

usersPhotoList.appendChild(publishPhotoListFragment);
