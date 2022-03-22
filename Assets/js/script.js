// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Defining the characters

criteria = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numerical: "1234567890",
  special: "~`!@#$%^&*()-_=+[]{'}/?>.<,;:|"

}


// Checkbox variables

var lower = document.querySelector("#lowercase");
var upper = document.querySelector("#uppercase");
var num = document.querySelector("#numeric");
var spec = document.querySelector("#special");
var length = document.querySelector("#length");
let pwdLength = 0;


function generatePassword() {

  let characters = "";

  if (lower.checked) {
    console.log("test")
  }

  
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};








//When selected ... 
// generateBtn.addEventListener('click', function() {
//   var password = "";
//   if (document.getElementById("lowercase").checked) {
//     password += criteria.lower
//     console.log(password)
//   })       




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)