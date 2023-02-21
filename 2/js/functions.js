//Функция для проверки длины строки
function definesLength (string, length) {
  return length === string.length;
}
definesLength('строка', 6);
definesLength('строка1234', 10);
definesLength('строка', 4);

// console.log(definesLength('строка', 6));
// console.log(definesLength('строка1234', 10));
// console.log(definesLength('строка', 4));

//Функция для проверки, является ли строка палиндромом
function definesPalindrome (palindrome) {
  palindrome = palindrome.toLowerCase().replaceAll(' ', '');
  return palindrome === palindrome.split('').reverse().join('');
}
definesPalindrome('Анна');
definesPalindrome('Кекс');
definesPalindrome('Лёша на полке клопа нашёл ');

// console.log(definesPalindrome('Анна'));
// console.log(definesPalindrome('Кекс'));
// console.log(definesPalindrome('Лёша на полке клопа нашёл '));

//Функция, которая принимает строку,
//извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
function stringToNumber(string) {
  if (typeof string === 'string'){
    string = string.match(/\d/g);
    if (string === null) {
      return NaN;
    }else {
      string = +string.join('');
      return string;
    }
  }
  return string;
}
stringToNumber('hfhbfhh');
stringToNumber('2023 год');
stringToNumber('ECMAScript 2022');
stringToNumber('1 кефир, 0.5 батона');

// console.log(stringToNumber('hfhbfhh'));
// console.log(stringToNumber('2023 год'));
// console.log(stringToNumber(2002));
// console.log(stringToNumber('1 кефир, 0.5 батона'));

//функция добавления символов в начало до определенной длины
function addSymbol(string, length, symbol) {
  if (length > string.length) {
    while (length > string.length){
      string = symbol + string;
    }
    if (string.length > length) {
      string = string.slice((symbol.length), (string.length)); //возврат на шаг назад (т.е убираем последний приписанный symbol слева)
      const k = length - string.length; //находим количество недостающих символов, которые надо вписать в string из symbol
      string = symbol.slice(0, k) + string; //и вписываем их!
    }
    return string;
  }
  return string;
}

addSymbol('1', 2, '0');
addSymbol('1', 4, '0');
addSymbol('q', 4, 'werty');
addSymbol('q', 4, 'we');
addSymbol('qwerty', 4, '0');

// console.log(addSymbol('1', 2, '0'));
// console.log(addSymbol('1', 4, '0'));
// console.log(addSymbol('q', 4, 'werty'));
// console.log(addSymbol('q', 4, 'we'));
