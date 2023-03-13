import {MAX_COUNT_ID, COMMENTS_MAX_COUNT, LIKES_MIN_COUNT, LIKES_MAX_COUNT, AVATARS_MAX_COUNT, DESCRIPTIONS, MESSAGES, NAMES, COUNT_PUBLISH_PHOTO} from './const/const.js';
import {getRandomInteger, getUniqueId, getRandomArrayElement} from './utils/helpers.js';

// функция создает комментария под фото и его составляющих
function createComment () {
  const idComment = getUniqueId(1, MAX_COUNT_ID);

  return {
    id: idComment,
    avatar: `img/avatar-${getRandomInteger(1, AVATARS_MAX_COUNT)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
}

// функция создает опубликованное фото
function createPublishPhoto () {
  const COMMENTS_COUNT = getRandomInteger(1, COMMENTS_MAX_COUNT);
  const comments = Array.from({ length: COMMENTS_COUNT}, createComment);
  const idUser = getUniqueId(1, MAX_COUNT_ID);
  const idUrlPhoto = getUniqueId(1, MAX_COUNT_ID);

  return {
    id: idUser,
    url: `photos/${idUrlPhoto}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments,
    COMMENTS_COUNT,
  };
}

const arrayPhotos = () => Array.from({length: COUNT_PUBLISH_PHOTO}, createPublishPhoto);
export {arrayPhotos};


