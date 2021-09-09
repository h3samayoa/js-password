// Assignment code here
var passwordText = document.querySelector("#password");
const lengthChar = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const form = document.getElementById("settingsForm");

//generate ASCII codes 
const exclude = arrayFromLowToHigh(91, 96);
const ALL_CODES = [];
for (let i = 65; i <= 122; i++) {
  if (ALL_CODES[i] == exclude) {
    ALL_CODES.push(String.fromCharCode(i));
  }
};
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48,57);
const SYMBOL_CODES = arrayFromLowToHigh(33,47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));


//check options are selected and set the password text to password
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const charAmount = lengthChar.value;
  const includeUppercase = uppercase.checked;
  const includeLowercase = lowercase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;
  const password = generatePassword(
    charAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  passwordText.value = password;
});

let generatePassword = (
  charAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = ALL_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES);
  const passwordChar = [];
  for (let i = 0; i < charAmount; i++) {
    const charCode = 
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordChar.push(String.fromCharCode(charCode));
  }
  return passwordChar.join('');
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

//modal variables

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//when modal button is clicked display modal
btn.onclick = function() {
  modal.style.display = "block";
}

//when the close button is clicked close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//when the window outside the modal is clicked close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
