import {isEscapeKey} from './utils/helpers.js';
import {HASHTAGS_MAX_COUNT, COMMENT_SYMBOLS_MAX_COUNT, VALID_SYMBOLS} from './const/const.js';
import {inputScale, uploadPreview} from './photo-editing-scale.js';
import {sliderElement} from './photo-editing-effect.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = uploadOverlay.querySelector('.img-upload__cancel');
const textHashtags = uploadOverlay.querySelector('.text__hashtags');
const textDescription = uploadOverlay.querySelector('.text__description');
const submitButton = uploadOverlay.querySelector('.img-upload__submit');
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
  document.addEventListener('keydown', (key) => {
    if (isEscapeKey(key)) {
      templateSuccess.classList.add('hidden');
    }
  });
};

const clickErrorButton = () => {
  document.addEventListener('keydown', (key) => {
    if (isEscapeKey(key)) {
      templateError.classList.add('hidden');
      uploadOverlay.classList.remove('hidden');
    }
  });
};

const clickSuccessOrErrorButton = (button, template, className) => {
  template.classList.remove('hidden');

  button.addEventListener('click', () => {
    template.classList.add('hidden');
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.className === className) {
      template.classList.add('hidden');
    }
  });
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const closeUpload = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputUploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  inputScale.value = '100%';
  uploadPreview.style.transform = 'scale(1)';
  uploadPreview.className = 'img-upload__preview';
  uploadPreview.style.filter = '';
  sliderElement.classList.add('hidden');
  document.querySelector('#effect-none').checked = true;
};

const validateHashtagsLength = (hashtags) => hashtags.length <= HASHTAGS_MAX_COUNT;

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

  return validateHashtagsLength(hashtags) && hasNonRepeatHashtag(hashtags) && hashtags.every(isValidTag);
};

function validateDescription (value) {
  return value.length <= COMMENT_SYMBOLS_MAX_COUNT;
}

inputUploadFile.addEventListener('change', () => {
  inputScale.value = '100%';
  uploadOverlay.classList.remove('hidden');
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

  uploadCancel.addEventListener('click', () => {
    closeUpload();
  });

  document.addEventListener('keydown', (key) => {
    if (isEscapeKey(key)) {
      if (textHashtags !== document.activeElement && textDescription !== document.activeElement){
        closeUpload();
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
          clickSuccessOrErrorButton(successButton, templateSuccess, 'success');
          closeUpload();
        })
        .catch(() => {
          document.body.appendChild(templateError);
          clickErrorButton();
          clickSuccessOrErrorButton(errorButton, templateError, 'error');
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, inputUploadFile};

