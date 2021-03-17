import { photos } from './data.js';

export function handlePicturesContainerClick (evt) {
  const picture = evt.target.closest('.picture');
  const body = document.querySelector('body');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  if (picture) {
    const pictureId = Number(picture.dataset.id);
    const photo = photos.find( (elem) => elem.id === pictureId);

    const bigPicture = document.querySelector('.big-picture');
    const img = bigPicture.querySelector('.big-picture__img img');
    const likes = bigPicture.querySelector('.likes-count');
    const comments = bigPicture.querySelector('.comments-count');
    const fragment = document.createDocumentFragment();
    const comment = bigPicture.querySelector('.social__comment');
    const socialComments = bigPicture.querySelector('.social__comments');

    bigPicture.classList.remove('hidden');
    img.src = photo.url;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;
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
}
