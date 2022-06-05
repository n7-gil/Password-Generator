// Assignment Code
// targets the generate button id selector in html 
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generates password. added while loop that will prompt a screen if the user does not select the min/max length criteria 
function generatePassword() {
 
  var critStorage = "";
  var randoPassword = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "123456789";
  var specialChar = "!@#$%^&*";
 
  //   console.log(*This password is valid*) 
  // while (passwordMessage < 8 || passwordMessage > 129) {
  // }
  var passwordMessage = parseInt(prompt("choose password length. Minimum 8 characters, Maximum 128 characters"));
  if (passwordMessage >= 8 && passwordMessage <= 128) { 

    // criteria prompts for password. console.logs are there to verify if the variable is functioning
    var confirmLowerCase = confirm("Want to add lowercase letters? Press 'OK'");
    // console.log(lowerCase);
    var confirmUpperCase = confirm("Want to add uppercase letters? Press 'OK'");
    // console.log(upperCase);
    var confirmNumeric = confirm("Want to add numbers (0-9)? Press 'OK'");
    // console.log(numeric);
    var confirmSpecialChar = confirm("Want to add special characters(!@#$*)? Press 'Ok'");
    // console.log(specialChar);

    // critStorage = "criteria storage", library of characters to choose from
    if (confirmLowerCase) {
      critStorage += lowerCase;
    }
    if (confirmUpperCase) {
      critStorage += upperCase;
    };
    if (confirmNumeric) {
      critStorage += numeric;
    };
    if (confirmSpecialChar) {
      critStorage += specialChar;
    };

    for (i = 0; i < passwordMessage; i++) {
      let randomNumber = Math.floor(Math.random() * critStorage.length);
      randoPassword += critStorage.charAt(randomNumber);
    }
    return randoPassword;
  } else alert("Error. Password must be between 8-128 characters. Please try again")
}