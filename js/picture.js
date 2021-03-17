import {generatePhotosArray} from "./data.js";

const photos = generatePhotosArray();
const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('.picture'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment();

for (let i = 0; i < photos.length; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  element.dataset.id = photos[i].id;
  const image = element.querySelector('.picture__img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');
  image.src = photos[i].url;
  likes.textContent = photos[i].likes;
  comments.textContent = photos[i].comments.length;
  fragment.appendChild(element);
}

picturesContainer.addEventListener('click', function (evt) {
  const picture = evt.target.closest('.picture');
  const body = document.querySelector('body');
  const socialCommenCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  socialCommenCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  if (picture) {
    const pictureId = Number(picture.dataset.id);
    const photo = photos.find( (elem) => elem.id === pictureId);

    const bigPicture = document.querySelector('.big-picture');
    bigPicture.classList.remove('hidden');

    const img = bigPicture.querySelector('.big-picture__img img');
    img.src = photo.url;

    const likes = bigPicture.querySelector('.likes-count');
    const comments = bigPicture.querySelector('.comments-count');

    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;

    const fragment = document.createDocumentFragment();
    const comment = bigPicture.querySelector('.social__comment');
    const socialComments = bigPicture.querySelector('.social__comments');

    socialComments.innerHTML = '';

    for (let i = 0; i < photo.comments.length; i++) {
      const commentCopy = comment.cloneNode(true);
      const avatar = commentCopy.querySelector('.social__picture');
      avatar.src = photo.comments[i].avatar;
      avatar.alt = photo.comments[i].name;

      const socialText = commentCopy.querySelector('.social__text');
      socialText.textContent = photo.comments[i].message;

      fragment.appendChild(commentCopy);
    }
    socialComments.appendChild(fragment);
  }
})

picturesContainer.appendChild(fragment);






