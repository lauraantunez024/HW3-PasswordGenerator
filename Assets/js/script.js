// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Checkbox variables

var lower = document.getElementById("#lowercase");
var upper = document.getElementById("#uppercase");
var num = document.getElementById("#numeric");
var spec = document.getElementById("#special");


//When selected ... 

lower.addEventListener("change", function() {
  password = "test";
  writePassword()
})


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


