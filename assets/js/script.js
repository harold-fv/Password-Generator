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


// declare global variable to hold the password length
var passwordLength;

function askForLength() {
  while (true) {
    // 1. Shows a prompt to ask the user to input a desired length
    var inputLength = window.prompt(
      "Enter a number that will indicate the length of your password"
    );

    // 2. If the user clicks Ok without inputting anything, the prompt reappears to ask the user again for a valid length.
    if (inputLength === null) {
        return;
      }
  
      // 3. If the user inputs a text that contains letters and numbers, the letters are removed leaving only the numbers.
      // Such numbers are stored in a variable named 'passwordLength'.
      passwordLength = parseInt(inputLength);
  
      // 4. Checks if passwordLength is trully a number using isNAN.
  
      // If passwordLength is not a number at all (INVALID PASSWORD LENGTH)
      if (isNaN(passwordLength)) {
        window.alert("That is not a number!");
      }
      // else, if the number is noth within 8 and 128 (INVALID PASSWORD LENGTH)
      else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters.");
      }
      // else, shows criteria checkboxes (VALID PASSWORD LENGTH)
      else {
        // to show criteria checkboxes, the class 'hide' is removed from the 'criteria-container' div
        // var element = document.getElementById("criteria-container");
        break;
      }
    }
  }
  
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
