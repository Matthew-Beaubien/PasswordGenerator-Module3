//Assignment Code
//Button to start the function
var generateBtn = document.querySelector("#generate");

//variables for the generatePassword function to pull from
var lowercase = "abcdefghijklmnopqrstuvwxyz" ;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var number = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//function for generating the password
function generatePassword() {
  var passwordCharacters = "" ;

//Prompt for password length 
  var passwordLength = prompt("Choose a password length from 8 to 128 characters") ;
  passwordLength = parseInt(passwordLength) ;

  if (passwordLength < 8) {
    alert("Password must be longer than 7 characters") ;
    return "" ;
  }

  if (passwordLength > 128) {
    alert("Password must be less than 128 characters") ;
    return "" ;
  }

//Prompts to add characters
  var lowercaseChoice = confirm("Add lowercase?") ;
  if (lowercaseChoice) {
  passwordCharacters += lowercase
  }
  
  var uppercaseChoice = confirm("Add uppercase?") ;
  if (uppercaseChoice) {
  passwordCharacters += uppercase
  }
  
  var numberChoice = confirm("Add numbers?") ;
  if (numberChoice) {
  passwordCharacters += number
  }

  var specialChoice = confirm("Add special characters?") ;
  if (specialChoice) {
passwordCharacters += special
  }

//Loop to generate password 
let password = ""
  for (let i = 0; i < passwordLength; i++) {
  password += passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)]
  }
  return password
}

//Password writes to #password
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  } 

//Event listener to generate button
 generateBtn.addEventListener("click", writePassword);


