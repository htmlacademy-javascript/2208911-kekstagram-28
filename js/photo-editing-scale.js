import {SCALE_IMG_STEP, SCALE_IMG_MAX, SCALE_IMG_MIN} from './const/const.js';

const reducingScaleButton = document.querySelector('.scale__control--smaller');
const increasingScaleButton = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

const SCALE_IMG_STEP_FOR_MIN = SCALE_IMG_STEP * (-1);

const changeScaleStyle = (value) => {
  uploadPreview.style.transform = `scale(${value / 100})`;
};

const changeScaleValue = (step, limit) => {
  const inputScaleValue = Number(inputScale.value.match(/\d+/));
  const changeValue = inputScaleValue + step;

  if (changeValue <= SCALE_IMG_MIN || changeValue >= SCALE_IMG_MAX) {
    inputScale.value = `${limit}%`;
    changeScaleStyle(limit);
  } else {
    inputScale.value = `${changeValue}%`;
    changeScaleStyle(changeValue);
  }
};

reducingScaleButton.addEventListener('click', () => {
  changeScaleValue(SCALE_IMG_STEP_FOR_MIN, SCALE_IMG_MIN);
});

increasingScaleButton.addEventListener('click', () => {
  changeScaleValue(SCALE_IMG_STEP, SCALE_IMG_MAX);
});

export {inputScale, uploadPreview};
