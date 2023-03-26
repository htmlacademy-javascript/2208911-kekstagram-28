import {COMMENTS_PART} from './const/const.js';

const bigPicture = document.querySelector('.big-picture');
const bigImg = document.querySelector('.big-picture__img').querySelector('img');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureComment = bigPicture.querySelector('.social__comment');
const commentCountContainer = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const renderBigImg = (picture) => {
  bigImg.src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.COMMENTS_COUNT;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPictureComments.innerHTML = '';
};

const renderComment = (picture, commentsPartView) => {
  picture.comments.slice(commentsPartView, commentsPartView + COMMENTS_PART).forEach((comment) => {
    const commentElement = bigPictureComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    bigPictureComments.appendChild(commentElement);
  });
};

const renderCommentPart = (picture, commentsPartView) => {
  const condition = ((commentsPartView + COMMENTS_PART) >= picture.COMMENTS_COUNT);
  const contentCommentCountContainer = condition ? `${picture.COMMENTS_COUNT} из <span class="comments-count">${picture.COMMENTS_COUNT}</span> комментариев` : `${commentsPartView + COMMENTS_PART} из <span class="comments-count">${picture.COMMENTS_COUNT}</span> комментариев`;
  commentCountContainer.innerHTML = contentCommentCountContainer;
  commentsLoader.classList.toggle(condition ? 'hidden' : undefined);

  renderComment(picture, commentsPartView);
};

const showBigPhoto = (photo) => {
  let commentsPartView = 0;

  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  renderBigImg(photo);
  renderCommentPart(photo, commentsPartView);

  commentsLoader.addEventListener('click', () => {
    commentsLoader.classList.remove('hidden');
    commentsPartView += COMMENTS_PART;
    renderCommentPart(photo, commentsPartView);
  });
};

export {showBigPhoto, bigPicture, commentsLoader};
