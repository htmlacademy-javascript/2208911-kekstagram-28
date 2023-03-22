const bigPicture = document.querySelector('.big-picture');
const bigImg = document.querySelector('.big-picture__img').querySelector('img');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureComment = bigPicture.querySelector('.social__comment');

const renderBigImg = (picture) => {
  bigImg.src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.COMMENTS_COUNT;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPictureComments.innerHTML = '';
};

const renderComment = (picture) => {
  picture.comments.forEach((comment) => {
    const commentElement = bigPictureComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    bigPictureComments.appendChild(commentElement);
  });
};

const showBigPhoto = (photos, child) => {
  const photo = photos.find((element) => element.id === Number(child.dataset.id));
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  renderBigImg(photo);
  renderComment(photo);
};

export {showBigPhoto, bigPicture};
