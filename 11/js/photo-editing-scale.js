import {SCALE_IMG_STEP, SCALE_IMG_MAX, SCALE_IMG_MIN} from './const/const.js';

const buttonReducingScaleImg = document.querySelector('.scale__control--smaller');
const buttonIncreasingScaleImg = document.querySelector('.scale__control--bigger');
const inputScaleImg = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const SCALE_IMG_STEP_FOR_MIN = SCALE_IMG_STEP * (-1);

const changeScaleImgStyle = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
};

const changeScaleImgValue = (step, limit) => {
  const inputScaleImgValue = Number(inputScaleImg.value.match(/\d+/));
  const changeValue = inputScaleImgValue + step;

  if (changeValue <= SCALE_IMG_MIN || changeValue >= SCALE_IMG_MAX) {
    inputScaleImg.value = `${limit}%`;
    changeScaleImgStyle(limit);
  } else {
    inputScaleImg.value = `${changeValue}%`;
    changeScaleImgStyle(changeValue);
  }
};

buttonReducingScaleImg.addEventListener('click', () => {
  changeScaleImgValue(SCALE_IMG_STEP_FOR_MIN, SCALE_IMG_MIN);
});

buttonIncreasingScaleImg.addEventListener('click', () => {
  changeScaleImgValue(SCALE_IMG_STEP, SCALE_IMG_MAX);
});

export {inputScaleImg, imgUploadPreview};
