import {generatePhotosArray} from "./data.js";

const photos = generatePhotosArray();
const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('.picture'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment();

for (let i = 0; i < photos.length; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  const image = element.querySelector('.picture__img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');
  image.src = photos[i].url;
  likes.textContent = photos[i].likes;
  comments.textContent = photos[i].comments.length;
  fragment.appendChild(element);
}

picturesContainer.appendChild(fragment);

