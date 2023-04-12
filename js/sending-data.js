import {isEscapeKey} from './utils/helpers.js';
import {HASHTAGS_MAX_COUNT, VALID_SYMBOLS} from './const/const.js';
import {inputScaleImg, imgUploadPreview} from './photo-editing-scale.js';
import {sliderElement} from './photo-editing-effect.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');
const submitButton = imgUploadOverlay.querySelector('.img-upload__submit');
const templateSuccess = document.querySelector('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);

const templateError = document.querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const successButton = templateSuccess.querySelector('.success__button');
const errorButton = templateError.querySelector('.error__button');

const clickSuccessButton = () => {
  templateSuccess.classList.remove('hidden');
  successButton.addEventListener('click', () => {
    templateSuccess.classList.add('hidden');
  });
};

const clickErrorButton = () => {
  templateError.classList.remove('hidden');
  errorButton.addEventListener('click', () => {
    templateError.classList.add('hidden');
    imgUploadOverlay.classList.remove('hidden');
  });
};

const clickSuccessOrErrorButton = (template) => {
  document.addEventListener('keydown', (key) => {
    if (isEscapeKey(key)) {
      template.classList.add('hidden');
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.className === 'success') {
      template.classList.add('hidden');
    }
  });
};

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
  imgUploadPreview.className = 'img-upload__preview';
  imgUploadPreview.style.filter = '';
  sliderElement.classList.add('hidden');
  document.querySelector('#effect-none').checked = true;
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      const formData = new FormData(evt.target);

      sendData(formData)
        .then(() => {
          document.body.appendChild(templateSuccess);
          clickSuccessButton();
          clickSuccessOrErrorButton(templateSuccess);
          closeImgUpload();
        })
        .catch(() => {
          document.body.appendChild(templateError);
          clickErrorButton();
          clickSuccessOrErrorButton(templateError);
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, inputUploadFile};

