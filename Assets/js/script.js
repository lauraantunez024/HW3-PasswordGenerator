// Assignment Code
var generateBtn = document.querySelector("#generate");
var wordMass = "";

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characterTypes = [];
  let pwdLength = getLength();
  pwdLength = parseInt(pwdLength);
  let isLower = lowerBool();
  let isUpper = upperBool();
  let isNum = numBool();
  let isSpec = specBool();

  // check which character types are true
  // push the functions into an array
  // inside of loop, randomly select a function
  // inside of function, return the character

  function grabU() {

    return upper[Math.floor(Math.random() * upper.length)];

  }

  function grabL() {

      return lower[Math.floor(Math.random() * lower.length)];
  }

  function grabN() {
  
      return numerical[Math.floor(Math.random() * numerical.length)];
  }

  function grabS() {

      return special[Math.floor(Math.random() * special.length)];
  }
  if (isLower === true) {
    characterTypes.push(grabL) 
  } 
  if (isUpper === true) {
    characterTypes.push(grabU) 
  } 
  if (isNum === true) {
    characterTypes.push(grabN) 
  } 
  if (isSpec === true) {
    characterTypes.push(grabS) 
  }

  for (let i = 0; i < pwdLength; i++) {
    wordMass += characterTypes[Math.floor(Math.random() * characterTypes.length)]();
  }



  passwordText.value = wordMass;

}

// Defining the characters

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "1234567890";
var special = "~`!@#$%^&*()-_=+[]{'}/?>.<,;:|";


// Checkbox variables

// var lower = document.querySelector("#lowercase");
// var upper = document.querySelector("#uppercase");
// var num = document.querySelector("#numeric");
// var spec = document.querySelector("#special");
// var length = document.querySelector("#length");



  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


var getLength = function length() {
  return prompt("How long should the password be?", "8-24");
}


var lowerBool = function lTrue (){
  let lowerInput = prompt("Include lowercase letters in password?", "Yes or No");
  if (lowerInput.toLowerCase().trim() === "yes" ) {
    return true;
  } else {
    return false;
  }
}


var upperBool = function uTrue (){
  let upperInput = prompt("Include uppercase letters in password?", "Yes or No");
  if (upperInput.toLowerCase().trim() === "yes" ) {
    return true;
  } else {
    return false;
  }
}

var numBool = function nTrue (){
  let numInput = prompt("Include numbers in password?", "Yes or No");
  if (numInput.toLowerCase().trim() === "yes" ) {
    return true;
  } else {
    return false;
  }
}

var specBool = function sTrue (){
  let specInput = prompt("Include special characters in password?", "Yes or No");
  if (specInput.toLowerCase().trim() === "yes" ) {
    return true;
  } else {
    return false;
  }
}

