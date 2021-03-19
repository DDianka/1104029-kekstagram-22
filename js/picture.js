import { photos } from './data.js';

const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('.picture'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');


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

picturesContainer.appendChild(fragment);






