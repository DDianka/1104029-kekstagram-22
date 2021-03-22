import { photos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const img = bigPicture.querySelector('.big-picture__img img');
const likes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComment = bigPicture.querySelector('.social__comment');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  socialComments.innerHTML = '';

  for (let i = 0; i < comments.length; i++) {
    const commentCopy = socialComment.cloneNode(true);
    const avatar = commentCopy.querySelector('.social__picture');
    const socialText = commentCopy.querySelector('.social__text');
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    socialText.textContent = comments[i].message;
    fragment.appendChild(commentCopy);
  }
  socialComments.appendChild(fragment);
}

picturesContainer.addEventListener('click', function (evt) {
  const picture = evt.target.closest('.picture');

  if (picture) {
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    const pictureId = Number(picture.dataset.id);
    const photo = photos.find((elem) => elem.id === pictureId);
    bigPicture.classList.remove('hidden');
    img.src = photo.url;
    likes.textContent = photo.likes;
    commentsCount.textContent = photo.comments.length;
    renderComments(photo.comments);
  }
});

bigPictureCancel.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

body.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
})
