// Assignment Code
var generateBtn = document.querySelector("#generate");

// Lowercase, Uppercase, Numeric numbers and Special Characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Prompt to confirm password length
function generatePassword() {
  var confirmLength = (prompt("Password Length (8 -128) characters"));
  while(confirmLength <=7 || confirmLength >=128) {
    alert("Password length must be between (8-128)characters");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }
  alert(`Your password will have ${confirmLength} characters`);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
