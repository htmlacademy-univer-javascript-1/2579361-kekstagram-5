// Функция для проверки длины строки


// let str, result;
// const strCheck = function(str) {

//   return result = str.length > 20 ? true : false;
// }

// console.log(strCheck('проверяемая строка'));


// Другое решение

// let str, length,result;

// const strCheck2 = function(str,length){
//   result = str.length <= length? true : false;
//   return result
// }
// console.log(strCheck2('проверяемая строка',20));
// console.log(strCheck2('проверяемая строка',18));
// console.log(strCheck2('проверяемая строка',10));



 // Функция для проверки, является ли строка палиндромом

// let str;
// const isPalindrom = function(str) {

//   return str.toUpperCase().split('').reverse().join('') === str.toUpperCase().split('').join('') ? 'Эта строка палиндром': 'Не является палиндромом';

// }
// console.log(isPalindrom('топот'));
// console.log(isPalindrom('ДовОд'));
// console.log(isPalindrom('Кекс'));


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:


function extractDigits(string) {
  let digits = '';

  for (let i = 0; i < string.length; i++) {
      const character = string[i];

      if (character >= '0' && character <= '9') {
          digits += character;
      }
  }

  return digits.length > 0 ? parseInt(digits, 10) : NaN;
}

// Пример использования
console.log(extractDigits('2023 год'));            // 2023
console.log(extractDigits('ECMAScript 2022'));     // 2022
console.log(extractDigits('1 кефир, 0.5 батона')); // 105
console.log(extractDigits('агент 007'));           // 7
console.log(extractDigits('а я томат'));           // NaN





