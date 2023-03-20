import {getPhotos} from './publishing-photo.js';

const usersPhotoList = document.querySelector('.pictures');
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const publishPhoto = getPhotos();

const publishPhotoListFragment = document.createDocumentFragment();

publishPhoto.forEach((publish) => {
  const templateElement = template.cloneNode(true);
  templateElement.querySelector('.picture__img').src = publish.url;
  templateElement.querySelector('.picture__likes').textContent = publish.likes;
  templateElement.querySelector('.picture__comments').textContent = publish.COMMENTS_COUNT;
  templateElement.dataset.id = publish.id;

  publishPhotoListFragment.appendChild(templateElement);
});

usersPhotoList.appendChild(publishPhotoListFragment);

export {publishPhoto, usersPhotoList};
