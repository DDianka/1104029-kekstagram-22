const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min <= max && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } return alert('Введённые числа не соответствуют требованиям.');
}

const checkStringLength = (string, maxLength = 140) => {
  return string.length <= maxLength;
}
checkStringLength('Hello world');

const getRandomElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

export {getRandomInt, getRandomElement, checkStringLength}
