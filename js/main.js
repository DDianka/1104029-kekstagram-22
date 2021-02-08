function getRandomInt(min, max) {
  if (min <= max && min >= 0) {
    return Math.floor(Math.random(min,max) * (max - min) + min);
  } return alert('Введённые числа не соответствуют требованиям.');
}

getRandomInt(0,5);

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('Hello world', 140);
