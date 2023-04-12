const COMMENTS_PART = 5;
const HASHTAGS_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const SCALE_IMG_STEP = 25;
const SCALE_IMG_MAX = 100;
const SCALE_IMG_MIN = 25;
const ALERT_SHOW_TIME = 5000;
const RENDER_DELAY = 500;
const COUNT_RANDOM_PHOTO = 10;

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

const TYPES_UPLOADED_FILES = ['png', 'jpg', 'jpeg'];

export {COMMENTS_PART, HASHTAGS_MAX_COUNT, VALID_SYMBOLS,
  SCALE_IMG_STEP, SCALE_IMG_MAX, SCALE_IMG_MIN, Effect, RENDER_DELAY,
  ALERT_SHOW_TIME, COUNT_RANDOM_PHOTO, TYPES_UPLOADED_FILES};
