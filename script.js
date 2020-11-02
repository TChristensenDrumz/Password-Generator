// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// If user selects no parameters, password is not generated
function writePassword() {
  if(getParameters() !== false){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if(password !== false){
      passwordText.value = password;
    }
  }
}

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "-", "_", "=", "+", "?", "/", "<", ">", ":", ";", ",", ".", "~", " "];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// numberChar array features every numeric character 3 times 
// to give numeric characters an equal chance to be selected 
// by math.Random() in the generator array due to the smaller number
// of numeric characters compared to alphabetic & special characters.
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var generator = [];

// Grabs user's parameters
function getParameters(){
  for(var i = generator.length - 1; i >= 0; i--){
    generator.pop(generator[i]);
  }
  var special = confirm("Would you like special characters? OK = Yes, Cancel = No");
  if(special === true){
    for(var i = 0; i < specialChar.length; i++){
      generator.push(specialChar[i]);
    }
  }
  var lower = confirm("Would you like lowercase characters? OK = Yes, Cancel = No");
  if(lower === true){
    for(var i = 0; i < lowercase.length; i++){
      generator.push(lowercase[i]);
    }
  }
  var upper = confirm("Would you like uppercase characters? OK = Yes, Cancel = No");
  if(upper === true){
    for(var i = 0; i < uppercase.length; i++){
      generator.push(uppercase[i]);
    }
  }
  var number = confirm("Would you like numeric characters? OK = Yes, Cancel = No");
  if(number === true){
    for(var i = 0; i < numberChar.length; i++){
      generator.push(numberChar[i]);
    }
  }
  if(special !== true && lower !== true && upper !== true && number !== true){
    alert("Unable to generate password");
    return false;
  }
}

// Generates password
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?", "Number of characters");
  var passGen = "";
  if(passwordLength < 8){
    alert("Password must be at least 8 characters");
    return false;
  }
  else if(passwordLength > 128){
    alert("Password can not be more than 128 characters");
    return false;
  }
  else{
    for(var i = 0; i < passwordLength; i++){
      passGen = passGen + generator[Math.floor(Math.random() * generator.length)];
    }
    return passGen;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
