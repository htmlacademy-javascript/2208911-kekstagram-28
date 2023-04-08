const ALERT_SHOW_TIME = 5000;

const showAlert = (message, color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showAlertError = (message) => {
  showAlert(message, 'red');
};

const showAlertSuccess = (message) => {
  showAlert(message, 'green');
};

// функция нахождения рандомного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


// функция нахождения случайного уникального числа
function getUniqueId () {
  const arrayIds = [];

  const getUniqueElement = (min, max) => {
    let uniqueId = getRandomInteger(min, max);

    while ((arrayIds.length < (max - min + 1)) || (!arrayIds.includes(uniqueId))) {
      arrayIds.push(uniqueId);
    }

    uniqueId = getRandomInteger(min, max);

    return uniqueId;
  };
  return getUniqueElement(0, 25);
}

// функция нахождения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getUniqueId, getRandomArrayElement, isEscapeKey, showAlertError, showAlertSuccess};
