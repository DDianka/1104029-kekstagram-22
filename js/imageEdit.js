const effectSlider = document.querySelector('.effect-level__slider');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadScale = document.querySelector('.img-upload__scale');

// const slider = document.querySelector('.effect-level__slider');
// const effectList = document.querySelector('.effects__list');
// const effectLevel = document.querySelector('.img-upload__effect-level');
// const effectLevelValue = document.querySelector('.effect-level__value');

const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');

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
});
