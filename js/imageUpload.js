import  './imageEdit.js';

const body = document.querySelector('body');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');



uploadFile.addEventListener('change', function () {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
})

uploadCancel.addEventListener('click', function () {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
});

body.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    imageUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
