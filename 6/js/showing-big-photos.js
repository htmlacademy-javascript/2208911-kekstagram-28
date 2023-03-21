import {usersPhotoList} from './viewing-photos.js';
import {isEscapeKey} from './utils/helpers.js';

const bigPicture = document.querySelector('.big-picture');
const bigImg = document.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureComment = bigPicture.querySelector('.social__comment');

const showingBigPhoto = (photos) => {
  usersPhotoList.addEventListener('click', (evt) => {
    evt.preventDefault();
    const child = evt.target.closest('[data-id]');

    if (!child) {
      return;
    }

    photos.forEach((photo) => {
      if (photo.id == child.dataset.id) {
        bigPicture.classList.remove('hidden');
        bigPicture.querySelector('.social__comment-count').classList.add('hidden');
        bigPicture.querySelector('.comments-loader').classList.add('hidden');
        document.querySelector('body').classList.add('modal-open');

        bigImg.src = photo.url;
        bigPicture.querySelector('.likes-count').textContent = photo.likes;
        bigPicture.querySelector('.comments-count').textContent = photo.COMMENTS_COUNT;
        bigPicture.querySelector('.social__caption').textContent = photo.description;
        bigPictureComments.textContent = '';

        photo.comments.forEach((comment) => {
          const commentElement = bigPictureComment.cloneNode(true);
          commentElement.querySelector('.social__picture').src = comment.avatar;
          commentElement.querySelector('.social__picture').alt = comment.name;
          commentElement.querySelector('.social__text').textContent = comment.message;

          bigPictureComments.appendChild(commentElement);
        });
      }
    });

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
};

export {showingBigPhoto};
