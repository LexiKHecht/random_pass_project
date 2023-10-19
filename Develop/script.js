
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "."];
var charSets = [];
var userPass = "";

var addLowerCase;
var addUpperCase;
var addNumeric;
var addSpecialChar;
var passLength;

var generateBtn = document.querySelector('#generate');
// var q1 = "yes";
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var userPass = "";

    function numberAmount() {
      passLength = Number(prompt("Enter desired number of characters for password (8-128):"));
      if (passLength < 8 || passLength > 128 || passLength == "") {
        alert("Please put in valid character amount.");
        numberAmount();
      }
    }
  
  numberAmount();

//  var

  function userChoice() {
    addLowerCase = prompt("Do you want your password to have lowercase letters?");
    addUpperCase = prompt("Do you want your password to have uppercase letters?");
    addNumeric = prompt("Do you want your password to have numbers letters?");
    addSpecialChar = prompt("Do you want your password to have special characters letters?");
    if (addLowerCase == "no" && addUpperCase == "no" && addNumeric == "no" && addSpecialChar == "no") {
      alert("Please pick a valid character type to include.");
      userChoice();
    }
  }

userChoice();

if (addLowerCase === "yes") {
  charSets = charSets.concat(lowercase);
}

if (addUpperCase === "yes") {
  charSets = charSets.concat(uppercase);
}

if (addNumeric === "yes") {
  charSets = charSets.concat(numeric);
}

if (addSpecialChar === "yes") {
  charSets = charSets.concat(specialChar);
}

for (let i = 0; i < passLength; i++) {
  userPass += charSets[Math.floor(Math.random() * (charSets.length))];
}
return userPass;

}
}


















