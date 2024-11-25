const isStrLengthValid = function (str) {
  return str.length > 20;
};

console.log(isStrLengthValid("проверяемая строка"));

const isStrLengthValid2 = function (str, maxLength) {
  return str.length <= maxLength;
};

console.log(isStrLengthValid2("проверяемая строка", 20));
console.log(isStrLengthValid2("проверяемая строка", 18));
console.log(isStrLengthValid2("проверяемая строка", 10));

const isPalindrom = function (palindromStr) {
  const normalizedStr = palindromStr.toUpperCase().replaceAll(" ", "");
  const reversedStr = normalizedStr.split("").reverse().join("");
  return reversedStr === normalizedStr;
};

console.log(isPalindrom("топот шалаш"));
console.log(isPalindrom("ДовОд"));
console.log(isPalindrom("Кекс"));

function extractDigits(string) {
  let digits = "";

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (character >= "0" && character <= "9") {
      digits += character;
    }
  }

  return digits.length > 0 ? parseInt(digits, 10) : NaN;
}

console.log(extractDigits("2023 год")); // 2023
console.log(extractDigits("ECMAScript 2022")); // 2022
console.log(extractDigits("1 кефир, 0.5 батона")); // 105
console.log(extractDigits("агент 007")); // 7
console.log(extractDigits("а я томат")); // NaN
