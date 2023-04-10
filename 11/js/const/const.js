const COUNT_PUBLISH_PHOTO = 25;
const MAX_COUNT_ID = 25;
const COMMENTS_MAX_COUNT = 15;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const AVATARS_MAX_COUNT = 6;
const COMMENTS_PART = 5;
const HASHTAGS_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const SCALE_IMG_STEP = 25;
const SCALE_IMG_MAX = 100;
const SCALE_IMG_MIN = 25;
const ALERT_SHOW_TIME = 5000;
const RENDER_DELAY = 500;
const COUNT_RANDOM_PHOTO = 10;

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

const Effect = {
  'none': {
    min: 0,
    max: 100,
    step: 1,
    style: 'none',
    unit: '',
  },
  'chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    unit: '',
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    unit: '',
  },
  'marvin': {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    unit: '%',
  },
  'phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    unit: 'px',
  },
  'heat': {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    unit: '',
  },
};

export {COUNT_PUBLISH_PHOTO, MAX_COUNT_ID, COMMENTS_MAX_COUNT,
  LIKES_MIN_COUNT, LIKES_MAX_COUNT, AVATARS_MAX_COUNT, DESCRIPTIONS,
  MESSAGES, NAMES, COMMENTS_PART, HASHTAGS_MAX_COUNT, VALID_SYMBOLS,
  SCALE_IMG_STEP, SCALE_IMG_MAX, SCALE_IMG_MIN, Effect, RENDER_DELAY,
  ALERT_SHOW_TIME, COUNT_RANDOM_PHOTO};
