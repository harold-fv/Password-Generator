// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


function generatePassword() {
  //5. calls askForLength function for validation of password length.
  askForLength();

  // 6. Declares lists for each criteria
  var numberList = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];