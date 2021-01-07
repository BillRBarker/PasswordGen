// Assignment Code
var generateBtn = document.querySelector("#generate");
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
let charPool = [];
let upperQ = null;
let lowerQ = null;
let nummeralQ = null;
let specialQ = null;
let passwordLength = null

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function () {
  passwordLength = prompt("How long to you want your password to be? Choose between 8 and 128");
  upperQ = confirm("Do you want upper case letters?");
  lowerQ = confirm("Do you want lower case letters?");
  nummeralQ = confirm("Do you want numberals?");
  specialQ = confirm("Do you want special characters?");
  console.log(passwordLength);
  console.log(upperQ);
  console.log(lowerQ);
  console.log(nummeralQ);
  console.log(specialQ);

  if (upperQ === true) {

    charPool = upperCase.concat();
    console.log(charPool);
  }

  if (lowerQ === true) {
    charPool = charPool.concat(lowerCase);
    console.log(charPool);
  }

  if (nummeralQ === true) {
    charPool = charPool.concat(numerals);
    console.log(charPool);
  }

  if (specialQ === true) {
    charPool = charPool.concat(specialChar);
    console.log(charPool);
  }

  if (Number(passwordLength >= 8) && Number(passwordLength <= 128)) {
    for (var i = 0; i < passwordLength; i++) { newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length)); }; localStorage.setItem("password", newPassword);
    var newPasswordStr = localStorage.getItem("password");
    passwordE1.textContent = newPasswordStr;
  };

}
);






// generateBtn.addEventListener("click", function() {
//   alert("Hello World!");
// });

