// функция нахождения рандомного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const arrayIds = [];

// функция нахождения случайного уникального числа
function getUniqueId (min, max) {
  let uniqueId = getRandomInteger(min, max);

  while ((arrayIds.length < (max - min + 1)) || (arrayIds.includes(uniqueId) === false)) {
    arrayIds.push(uniqueId);
  }

  uniqueId = getRandomInteger(min, max);

  return uniqueId;
}

// функция нахождения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getUniqueId, getRandomArrayElement};
