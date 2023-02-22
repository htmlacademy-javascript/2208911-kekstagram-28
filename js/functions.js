//Функция для проверки длины строки
function isCorrectLength (string, length) {
  return length >= string.length;
}

isCorrectLength('строка', 6);
isCorrectLength('строка1234', 12);
isCorrectLength('строка', 4);


//Функция для проверки, является ли строка палиндромом
function isPalindrome (palindrome) {
  const checkpalindrome = palindrome.toLowerCase().replaceAll(' ', '');

  return checkpalindrome === checkpalindrome.split('').reverse().join('');
}

isPalindrome('Анна');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

//Функция, которая принимает строку,
//извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
function stringToNumber(string) {
  if (typeof string === 'number'){
    return string;
  }

  const matched = string.match(/\d/g);

  return matched === null ? NaN : +matched.join('');
}

stringToNumber('hfhbfhh');
stringToNumber('2023 год');
stringToNumber('ECMAScript 2022');
stringToNumber('1 кефир, 0.5 батона');

//функция добавления символов в начало до определенной длины
function addSymbol(string, length, symbol) {
  if (length <= string.length) {
    return string;
  }

  while (length > string.length) {
    const k = length - string.length; //находим количество недостающих символов, которые надо вписать в string из symbol
    string = symbol.slice(0, k) + string;
  }

  return string;
}

addSymbol('1', 2, '0');
addSymbol('1', 4, '0');
addSymbol('q', 4, 'werty');
addSymbol('q', 4, 'we');
addSymbol('qwerty', 4, '0');
