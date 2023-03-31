const COUNT_PUBLISH_PHOTO = 25;
const MAX_COUNT_ID = 25;
const COMMENTS_MAX_COUNT = 15;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const AVATARS_MAX_COUNT = 6;
const COMMENTS_PART = 5;
const HASHTAGS_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

//массив строк описаний фотографий
const DESCRIPTIONS = [
  'Наслаждайтесь каждым моментом.',
  'Назад пути нет!',
  'Сколько мне ещё предстоит рассказать...',
  'На ошибках учатся',
  'Повод задуматься.',
];

const MESSAGES = [
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

export {COUNT_PUBLISH_PHOTO, MAX_COUNT_ID, COMMENTS_MAX_COUNT,
  LIKES_MIN_COUNT, LIKES_MAX_COUNT, AVATARS_MAX_COUNT, DESCRIPTIONS,
  MESSAGES, NAMES, COMMENTS_PART, HASHTAGS_MAX_COUNT, VALID_SYMBOLS};
