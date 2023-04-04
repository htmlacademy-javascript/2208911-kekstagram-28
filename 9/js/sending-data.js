import {isEscapeKey} from './utils/helpers.js';
import {HASHTAGS_MAX_COUNT, VALID_SYMBOLS} from './const/const.js';
import {inputScaleImg, imgUploadPreview} from './photo-editing-scale.js';
import {sliderElement} from './photo-editing-effect.js';

const form = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const closeImgUpload = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputUploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  inputScaleImg.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = '';
  sliderElement.classList.add('hidden');
};

const lengthHashtagsValid = (hashtags) => hashtags.length <= HASHTAGS_MAX_COUNT;

const hasNonRepeatHashtag = (hashtags) => {
  const lowerCaseHashtags = hashtags.map((tag) => tag.toLowerCase());

  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const validateHashtags = (value) => {
  const hashtags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return lengthHashtagsValid(hashtags) && hasNonRepeatHashtag(hashtags) && hashtags.every(isValidTag);
};

function validateDescription (value) {
  return value.length <= 140;
}

inputUploadFile.addEventListener('change', () => {
  inputScaleImg.value = '100%';
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  textHashtags.addEventListener('change', () => {
    pristine.addValidator(
      textHashtags,
      validateHashtags,
      'Неправильно заполненные хэштэги!');
  });

  textDescription.addEventListener('change', () => {
    pristine.addValidator(
      textDescription,
      validateDescription,
      'Превышено максимальное количество символов');
  });

  imgUploadCancel.addEventListener('click', () => {
    closeImgUpload();
  });

  document.addEventListener('keydown', (key) => {
    if (isEscapeKey(key)) {
      if (textHashtags !== document.activeElement && textDescription !== document.activeElement){
        closeImgUpload();
      }
    }
  });
});

form.addEventListener('submit', (evt) => {
  if (pristine.validate()) {
    return;
  }

  evt.preventDefault();
});
