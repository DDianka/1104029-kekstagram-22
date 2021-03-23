const effectSlider = document.querySelector('.effect-level__slider');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadScale = document.querySelector('.img-upload__scale');

const effectList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
// const radioBtn = document.querySelector('.effects__radio');
const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');

effectList.addEventListener('change', function (evt) {
  const effectsItem = evt.target.closest('.effects__item');
  const effectsPreview = effectsItem.querySelector('.effects__preview');
  const effect = effectsPreview.classList[1];
  photoPreview.className = '';
  photoPreview.classList.add(effect);
  if (effectsPreview.classList.contains('effects__preview--none')) {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
});

const STEP_SIZE_PHOTO = 25;
const MIN_PHOTO_SIZE = 25;
const MAX_PHOTO_SIZE = 100;

let photoSize = 100;

const reduceImgSize = () => {
  if (photoSize > MIN_PHOTO_SIZE) {
    photoSize -= STEP_SIZE_PHOTO;
    photoPreview.style.transform = `scale(0.${photoSize})`;
  }
  scaleControlValue.value = `${photoSize}%`;
}

const increaseImgSize = () => {
  if (photoSize < MAX_PHOTO_SIZE) {
    photoSize += STEP_SIZE_PHOTO;
    photoPreview.style.transform = `scale(0.${photoSize})`;
  }
  if (photoSize === MAX_PHOTO_SIZE) {
    photoPreview.style.transform = 'scale(1)';
  }
  scaleControlValue.value = `${photoSize}%`;
}

imgUploadScale.addEventListener('click', (evt) => {
  const className = evt.target.classList[1];
  if (className === 'scale__control--smaller') {
    reduceImgSize()
  }
  if (className === 'scale__control--bigger') {
    increaseImgSize()
  }
});

window.noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
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
  },
});

effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelValue.value = unencoded[handle];
});
