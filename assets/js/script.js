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

  
  var uppercaseList = [];

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

  // 7. Declares a list a pool of possible characters
  var optionsList = [];

  var includeNumbers = confirm("Do you want numbers in your password?");
  var includeSymbols = confirm("Do you want symbols in your password?");
  var includeLowercase = confirm(
    "Do you want lowercase letters in your password?"
  );
  var includeUppercase = confirm(
    "Do you want uppercase letters in your password?"
  );

  // 8. Checks if various criteria are confirmed, respective lists are inserted in optionsList
  if (includeNumbers == true) {
    optionsList = optionsList.concat(numberList);
  }

  if (includeSymbols == true) {
    optionsList = optionsList.concat(symbolList);
  }

  if (includeLowercase == true) {
    optionsList = optionsList.concat(lowercaseList);
  }

  if (includeUppercase == true) {
    optionsList = optionsList.concat(uppercaseList);
  }

  // 9. Declared an empty password string
 var password = "";

  // 10. Loops through the entire optionsList. Randomly picks any character in the list and adds it onto the password string.
  for (var i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * (optionsList.length - 1));
    password = password + optionsList[index];
  }

  return password;
}

}

