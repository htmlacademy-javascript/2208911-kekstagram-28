import {imgUploadPreview} from './photo-editing-scale.js';
import {Effect} from './const/const.js';

const sliderElement = document.querySelector('.img-upload__effect-level');
let effectLevelValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

noUiSlider.create(sliderElement, {
  range: {
    min: Effect['none'].min,
    max: Effect['none'].max,
  },
  start: Effect['none'].max,
  step: Effect['none'].step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }

      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

sliderElement.classList.add('hidden');

effectsList.addEventListener('change', () => {
  const effectRadio = document.querySelector('.effects__radio:checked');
  imgUploadPreview.classList.add(`effects__preview--${effectRadio.value}`);

  if (effectRadio.value === 'none') {
    sliderElement.classList.add('hidden');
  }else {
    sliderElement.classList.remove('hidden');
  }

  const settingsEffect = (Effect[effectRadio.value]);

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: settingsEffect.min,
      max: settingsEffect.max,
    },
    start: settingsEffect.max,
    step: settingsEffect.step,
  });

  if (settingsEffect === Effect['none']) {
    sliderElement.classList.add('hidden');
  }else {
    sliderElement.classList.remove('hidden');
  }

  sliderElement.noUiSlider.on('update', () => {
    const sliderElementValue = sliderElement.noUiSlider.get();
    imgUploadPreview.style.filter = (effectRadio.value === 'none') ? settingsEffect.style : `${settingsEffect.style}(${sliderElementValue}${settingsEffect.unit})`;
    effectLevelValue = sliderElementValue;
  });
});

export {sliderElement, effectLevelValue};

