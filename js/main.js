const COUNT_PUBLISH_PHOTO = 25;
const MAX_COUNT_ID = 25;
const MAX_COUNT_COMMENTS = 5;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const MAX_COUNT_AVATARS = 6;
const MAX_COUNT_ID_COMMENTATORS = 100;

//массив строк описаний фотографий
const DESCRIPTION = [
  'Наслаждайтесь каждым моментом.',
  'Назад пути нет!',
  'Сколько мне ещё предстоит рассказать...',
  'На ошибках учатся',
  'Повод задуматься.',
];

const MESSAGE = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',];

const NAMES = [
  'Екатерина',
  'Ксения',
  'Арсений',
  'Тимофей',
  'Александр',
  'Марина',
];

//функция нахождения рандомного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// //функция нахождения случайного уникального числа
function getUniqueId (min, max) {
  const arrayId = [];

  return function () {
    let uniqueId = getRandomInteger(min, max);

    if (arrayId.length >= (max - min + 1)) {
      return null;
    }
    while (arrayId.includes(uniqueId)) {
      uniqueId = getRandomInteger(min, max);
    }
    arrayId.push(uniqueId);

    return uniqueId;
  };
}

//функция нахождения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//функция создания комментарийя и его составляющих
function createComment () {
  const idComment = getUniqueId(1, MAX_COUNT_ID_COMMENTATORS);

  return {
    id: idComment(),
    avatar: `img/avatar-${getRandomInteger(1, MAX_COUNT_AVATARS)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES)
  };
}

//функция создает опубликованное фото
function createPublishPhoto () {
  const COUNT_COMMENTS = getRandomInteger(1, MAX_COUNT_COMMENTS);
  const commentsArray = Array.from({ length: COUNT_COMMENTS}, createComment);
  const idUser = getUniqueId(1, MAX_COUNT_ID);
  const idUrlPhoto = getUniqueId(1, MAX_COUNT_ID);

  return {
    id: idUser(),
    url: `photos/${idUrlPhoto()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
    comments: commentsArray,
  };
}

const arrayPhotos = Array.from({length: COUNT_PUBLISH_PHOTO}, createPublishPhoto);
