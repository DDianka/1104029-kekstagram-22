function getRandomInt(min, max) {
  if (min < max && min >= 0) {
    return Math.floor(Math.random(min,max) * (max - min) + min);
  } return alert('Минимальное число больше максимального, введите другое.');
}

getRandomInt(0,5);

function checkStringLength(string, maxLength) {
  return string.length < maxLength;
}

checkStringLength('Hello world', 140);
