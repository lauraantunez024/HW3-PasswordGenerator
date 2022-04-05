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

  // check which character types are true
  // push the functions into an array
  // inside of loop, randomly select a function
  // inside of function, return the character
  function selectCharacterTypes() {
    let isLower = lowerBool();
    let isUpper = upperBool();
    let isNum = numBool();
    let isSpec = specBool();
    if (isLower) {
      characterTypes.push(grabL) 
    } 
    if (isUpper) {
      characterTypes.push(grabU) 
    } 
    if (isNum) {
      characterTypes.push(grabN) 
    } 
    if (isSpec) {
      characterTypes.push(grabS) 
    }
  }

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

  selectCharacterTypes()
  while (characterTypes.length === 0) {
    alert("Input yes to at least one parameter")
    selectCharacterTypes();
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
  let ans = prompt("How long should the password be?", "8-128");
  while (parseInt(ans) < 8 || parseInt(ans) > 128){
    alert("Must be between 8 and 128 characters.");
    ans = prompt("How long should the password be?", "8-128");
  } 
  return ans;
}


var lowerBool = function lTrue (){
  let lowerInput = prompt("Include lowercase letters in password?", "Yes or No");
  let yesL = lowerInput.toLowerCase().trim() === "yes";
  let inputBool = lowerInput.toLowerCase().trim() === "yes" || lowerInput.toLowerCase().trim() === "no";
  while (!inputBool) {
    lowerInput = prompt("Include lowercase letters in password?", "Yes or No");
    inputBool = lowerInput.toLowerCase().trim() === "yes" || lowerInput.toLowerCase().trim() === "no";
    yesL = lowerInput.toLowerCase().trim() === "yes";
  } 
  return yesL;
}


var upperBool = function uTrue (){
  let upperInput = prompt("Include uppercase letters in password?", "Yes or No");
  let yesU = upperInput.toLowerCase().trim() === "yes";
  let inputBool = upperInput.toLowerCase().trim() === "yes" || upperInput.toLowerCase().trim() === "no";
  while (!inputBool) {
    upperInput = prompt("Include uppercase letters in password?", "Yes or No");
    inputBool = upperInput.toLowerCase().trim() === "yes" || upperInput.toLowerCase().trim() === "no";
    yesU = upperInput.toLowerCase().trim() === "yes";
  } 
  return yesU;
}

var numBool = function nTrue (){
  let numInput = prompt("Include numbers in password?", "Yes or No");
  let yesN = numInput.toLowerCase().trim() === "yes";
  let inputBool = numInput.toLowerCase().trim() === "yes" || numInput.toLowerCase().trim() === "no";
  while (!inputBool) {
    numInput = prompt("Include numbers in password?", "Yes or No");
    inputBool = numInput.toLowerCase().trim() === "yes" || numInput.toLowerCase().trim() === "no";
    yesN = numInput.toLowerCase().trim() === "yes";
  } 
  return yesN;
}

var specBool = function sTrue (){
  let specInput = prompt("Include special characters in password?", "Yes or No");
  let yesS = specInput.toLowerCase().trim() === "yes";
  let inputBool = specInput.toLowerCase().trim() === "yes" || specInput.toLowerCase().trim() === "no";
  while (!inputBool) {
    specInput = prompt("Include special characters in password?", "Yes or No");
    inputBool = specInput.toLowerCase().trim() === "yes" || specInput.toLowerCase().trim() === "no";
    yesS = specInput.toLowerCase().trim() === "yes";
  } 
  return yesS;
}

