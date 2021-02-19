const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min <= max && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } return alert('Введённые числа не соответствуют требованиям.');
}

const checkStringLength = (string, maxLength) => {
  return string.length <= maxLength;
}
checkStringLength('Hello world', 140);

const getRandomElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

const names = [
  'Илинка',
  'Ян',
  'Наоми',
  'Джессика',
  'Эдриан',
  'Юлиан',
  'Майя',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Это я.',
  'Ищу вдохновение.',
  'Отличная книга - рекоммендую',
  'С друзьями.',
  'Как вам мой новый имидж?',
  'Работа выполнена.',
  'Какое красивое сегодня небо. Как вам?',
];

let lastCommentId = 1;
const generateComments = () => {
  const comments = [];
  const commentsAmount = getRandomInt(1, 5);

  for (let i = 1; i <= commentsAmount; i++) {
    comments.push({
      id: lastCommentId++,
      avatar: 'img/avatar' + '-' + getRandomInt(1, 6) + '.svg',
      message: getRandomElement(messages),
      name: getRandomElement(names),
    });
  }

  return comments;
}

const generatePhotosArray = (photosAmount = 25) => {
  const photos= [];

  for (let i = 1; i <= photosAmount; i++) {
    photos.push({
      id: i,
      url:'photos/' + i + '.jpg',
      description: getRandomElement(descriptions),
      likes: getRandomInt(15,200),
      comment: generateComments(),
    });
  }

  return photos;
}

generatePhotosArray();
