// Assignment Code
var generateBtn = document.querySelector("#generate");

// Lowercase, Uppercase, Numeric numbers and Special Characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Prompt to confirm password length
function generatePassword() {
  var passwordOptions = [];
  var confirmLength = prompt("Password Length (8 - 128) characters");
  if (confirmLength >= 8 && confirmLength <= 128){
    alert (`Your password will have ${confirmLength} characters`)
  }
  else {
    alert ('Please choose a number between 8-128');
    return;
  }
  // Confirm lower case
  var confirmLowerCase = (confirm('Would you like lower cases?'));
  // Confirm upper case
  var confirmUpperCase = (confirm('Would you like upper cases?'));
  // Confirm special cases
  var confirmCharList = (confirm('Would you like special characters?'));
  // Confirm numbers
  var confirmNumber = (confirm('Would you like numbers?'));

  // Combined password options
  if (confirmLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (confirmUpperCase) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (confirmCharList) {
    passwordOptions = passwordOptions.concat(charList);
  }
  if (confirmNumber) {
    passwordOptions = passwordOptions.concat(numberList);
  }
  // 
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++){
    randomPassword = randomPassword + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
