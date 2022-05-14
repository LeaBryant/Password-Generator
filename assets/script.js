// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "abcdefghijklmnopqrstuvwxyz".split("");
var randNum = "1234567890".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var password = Math.floor(Math.random() * chars);


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById ("#generate").value;
function generatePassword() {
    var generatedPassword = "generated password" 
    console.log("clicked generate password");
    generatedPassword = "";
    return generatedPassword;
}


var lengthPass = prompt("please enter password length")

//   var lowerChar = confirm ("do you want lower case characters")

// //Added object code 
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var randNum = Math.floor(Math.random() * chars);


//   passwordText.value = password;
// }

// document.getElementById ("#generate").value =
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Create a alert box //

