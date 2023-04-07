const usersPhotoList = document.querySelector('.pictures');
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosList = (publishPhotos) => {
  const publishPhotoListFragment = document.createDocumentFragment();

  publishPhotos
    .slice()
    .forEach((publish) => {
      const templateElement = template.cloneNode(true);
      templateElement.querySelector('.picture__img').src = publish.url;
      templateElement.querySelector('.picture__likes').textContent = publish.likes;
      templateElement.querySelector('.picture__comments').textContent = publish.comments.length;
      templateElement.dataset.id = publish.id;

      publishPhotoListFragment.appendChild(templateElement);
    });

  const picturesTitle = document.querySelector('.pictures__title');
  const imgUpload = document.querySelector('.img-upload');

  usersPhotoList.innerHTML = '';
  usersPhotoList.append(picturesTitle);
  usersPhotoList.append(imgUpload);
  usersPhotoList.appendChild(publishPhotoListFragment);
};

export {photosList, usersPhotoList};

